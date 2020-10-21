<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Role;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    private $rules = [
        'role_id' => 'required|exists:roles,id',
        'name' => 'required|string',
        'email' => 'required|string|email|unique:users',
        'password' => 'required|string|confirmed',
        'photo' => 'nullable|image',
        'phone' => 'required|string',
    ];



    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $users = [];
        $filteredData = User::orderBy('id');

        $filteredData = $filteredData
            ->join('roles', 'roles.id', '=', 'users.role_id')
            ->select('users.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%")
                        ->orWhere('email', 'LIKE', "%$search%")
                        ->orWhere('roles.name', 'LIKE', "%$search%")
                        ->orWhere('photo', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $user) {
            $users[] = $user->toArray() + [
                'role' => $user->role->name,
            ];
        }

        return [
            'users' => $users,
            'total' => $total,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $users = $data['users'];
        $total = $data['total'];

        return response()->json([
            'users' => $users,
            'total' => $total,
        ]);
    }

    public function info()
    {
        $roles = [];
        foreach (Role::all() as $city) {
            $roles[] = array_merge($city->toArray(), []);
        }

        return response()->json([
            'roles' => $roles,
        ]);
    }

    public function show($id)
    {
        $user = User::find($id);
        if (!$user) return response()->json([
            'message' => UtilController::message('Utilisateur inexistant.', 'danger'),
        ]);
        
        $roles = [];
        foreach (Role::all() as $city) {
            $roles[] = array_merge($city->toArray(), []);
        }

        return response()->json([
            'user' => $user,
            'roles' => $roles,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        $input = $request->except('photo');

        $input['phone'] = '237' . $input['phone'];
        $input['password'] = Hash::make($input['password']);

        if ($file = $request->file('photo')) {
            $fileName = time() . $file->getClientOriginalName();
            $file->move('users', $fileName);
            $input['photo'] = htmlspecialchars($fileName);
        }

        User::create($input);

        return response()->json([
            'message' => UtilController::message('Utilisateur créé avec succès.', 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        if (!$user) return response()->json([
            'message' => UtilController::message('Utilisateur inexistant.', 'danger'),
        ]);

        $rules = $this->rules;
        if ($request->email === $user->email) $rules['email'] = 'required|email';
        if (!$request->password) $rules['password'] = 'nullable|string|confirmed';

        $request->validate($rules);

        $input = $request->except(['password', 'photo']);
        if ($request->password) $input['password'] = Hash::make($request->password);

        if ($file = $request->file('photo')) {
            if ($user->photo) unlink(public_path($user->photo));
            $fileName = time() . $file->getClientOriginalName();
            $file->move('users', $fileName);
            $input['photo'] = htmlspecialchars($fileName);
        }

        $user->update($input);

        return response()->json([
            'message' => UtilController::message('Utilisateur modifié avec succès.', 'success'),
            'user' => $user,
        ]);
    }

    public function destroy($id)
    {
        $user = User::find($id);
        if (!$user) return response()->json([
            'message' => UtilController::message('Utilisateur inexistant.', 'danger'),
        ]);

        if ($user->photo) unlink(public_path($user->photo));
        $user->delete();

        $data = $this->data();

        $users = $data['users'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message('Utilisateur supprimé avec succès.', 'success'),
            'users' => $users,
            'total' => $total,
        ]);
    }
}
