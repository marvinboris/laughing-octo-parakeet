<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Method;
use Illuminate\Http\Request;

class MethodController extends Controller
{
    private $rules = [
        'name' => 'required|string',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $methods = [];
        $filteredData = Method::orderBy('id');

        $filteredData = $filteredData
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $method) {
            $methods[] = $method->toArray();
        }

        return [
            'methods' => $methods,
            'total' => $total,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $methods = $data['methods'];
        $total = $data['total'];

        return response()->json([
            'methods' => $methods,
            'total' => $total,
        ]);
    }

    public function show($id)
    {
        $method = Method::find($id);
        if (!$method) return response()->json([
            'message' => UtilController::message('Méthode inexistante.', 'danger'),
        ]);

        return response()->json([
            'method' => $method,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        $input = $request->all();

        Method::create($input);

        return response()->json([
            'message' => UtilController::message('Méthode créée avec succès.', 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $method = Method::find($id);
        if (!$method) return response()->json([
            'message' => UtilController::message('Méthode inexistante.', 'danger'),
        ]);

        $request->validate($this->rules);

        $input = $request->all();

        $method->update($input);

        return response()->json([
            'message' => UtilController::message('Méthode modifiée avec succès.', 'success'),
            'method' => $method,
        ]);
    }

    public function destroy($id)
    {
        $method = Method::find($id);
        if (!$method) return response()->json([
            'message' => UtilController::message('Méthode inexistante.', 'danger'),
        ]);

        $method->delete();

        $data = $this->data();

        $methods = $data['methods'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message('Méthode supprimée avec succès.', 'success'),
            'methods' => $methods,
            'total' => $total,
        ]);
    }
}
