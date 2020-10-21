<?php

namespace App\Http\Controllers\Admin;

use App\Admin;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    private $rules = [
        'name' => 'required|string',
        'email' => 'required|email|unique:admins',
        'password' => 'required|string|confirmed',
        'phone' => 'required|string',
        'photo' => 'nullable|image'
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $admins = [];
        $filteredData = Admin::orderBy('id');

        $filteredData = $filteredData
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%")
                        ->orWhere('email', 'LIKE', "%$search%")
                        ->orWhere('photo', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $admin) {
            $admins[] = $admin->toArray() + [];
        }

        return [
            'admins' => $admins,
            'total' => $total,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $admins = $data['admins'];
        $total = $data['total'];

        return response()->json([
            'admins' => $admins,
            'total' => $total,
        ]);
    }

    public function show($id)
    {
        $admin = Admin::find($id);
        if (!$admin) return response()->json([
            'message' => UtilController::message('Administrateur inexistant.', 'danger'),
        ]);

        return response()->json([
            'admin' => $admin,
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
            $file->move('admins', $fileName);
            $input['photo'] = htmlspecialchars($fileName);
        }

        Admin::create($input);

        return response()->json([
            'message' => UtilController::message('Administrateur créé avec succès.', 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $admin = Admin::find($id);
        if (!$admin) return response()->json([
            'message' => UtilController::message('Administrateur inexistant.', 'danger'),
        ]);

        $rules = $this->rules;
        if ($request->email === $admin->email) $rules['email'] = 'required|email';
        if (!$request->password) $rules['password'] = 'nullable|string|confirmed';

        $request->validate($rules);

        $input = $request->except(['password', 'photo']);
        if ($request->password) $input['password'] = Hash::make($request->password);

        if ($file = $request->file('photo')) {
            if ($admin->photo) unlink(public_path($admin->photo));
            $fileName = time() . $file->getClientOriginalName();
            $file->move('admins', $fileName);
            $input['photo'] = htmlspecialchars($fileName);
        }

        $admin->update($input);

        return response()->json([
            'message' => UtilController::message('Administrateur modifié avec succès.', 'success'),
            'admin' => $admin,
        ]);
    }

    public function destroy($id)
    {
        $admin = Admin::find($id);
        if (!$admin) return response()->json([
            'message' => UtilController::message('Administrateur inexistant.', 'danger'),
        ]);

        if ($admin->photo) unlink(public_path($admin->photo));
        $admin->delete();

        $data = $this->data();

        $admins = $data['admins'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message('Administrateur supprimé avec succès.', 'success'),
            'admins' => $admins,
            'total' => $total,
        ]);
    }
}
