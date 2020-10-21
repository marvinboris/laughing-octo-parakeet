<?php

namespace App\Http\Controllers\User;

use App\Feature;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use Illuminate\Http\Request;

class FeatureController extends Controller
{
    private $rules = [
        'name' => 'required|string',
        'prefix' => 'required|string',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $features = [];
        $filteredData = Feature::orderBy('id');

        $filteredData = $filteredData
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%")
                        ->orWhere('prefix', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $feature) {
            $features[] = $feature->toArray();
        }

        return [
            'features' => $features,
            'total' => $total,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $features = $data['features'];
        $total = $data['total'];

        return response()->json([
            'features' => $features,
            'total' => $total,
        ]);
    }

    public function show($id)
    {
        $feature = Feature::find($id);
        if (!$feature) return response()->json([
            'message' => UtilController::message('Fonctionnalité inexistante.', 'danger'),
        ]);

        return response()->json([
            'feature' => $feature,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        $input = $request->all();

        Feature::create($input);

        return response()->json([
            'message' => UtilController::message('Fonctionnalité créée avec succès.', 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $feature = Feature::find($id);
        if (!$feature) return response()->json([
            'message' => UtilController::message('Fonctionnalité inexistante.', 'danger'),
        ]);

        $request->validate($this->rules);

        $input = $request->all();

        $feature->update($input);

        return response()->json([
            'message' => UtilController::message('Fonctionnalité modifiée avec succès.', 'success'),
            'feature' => $feature,
        ]);
    }

    public function destroy($id)
    {
        $feature = Feature::find($id);
        if (!$feature) return response()->json([
            'message' => UtilController::message('Fonctionnalité inexistante.', 'danger'),
        ]);

        $feature->delete();

        $data = $this->data();

        $features = $data['features'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message('Fonctionnalité supprimée avec succès.', 'success'),
            'features' => $features,
            'total' => $total,
        ]);
    }
}
