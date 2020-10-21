<?php

namespace App\Http\Controllers\User;

use App\City;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Quarter;
use Illuminate\Http\Request;

class QuarterController extends Controller
{
    private $rules = [
        'name' => 'required|string',
        'city_id' => 'required|exists:cities,id',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $quarters = [];
        $filteredData = Quarter::orderBy('id');

        $filteredData = $filteredData
            ->join('cities', 'cities.id', '=', 'quarters.city_id')
            ->select('quarters.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%")
                        ->orWhere('cities.name', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $quarter) {
            $quarters[] = $quarter->toArray() + [
                'city' => $quarter->city->name,
            ];
        }

        return [
            'quarters' => $quarters,
            'total' => $total,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $quarters = $data['quarters'];
        $total = $data['total'];

        return response()->json([
            'quarters' => $quarters,
            'total' => $total,
        ]);
    }

    public function info()
    {
        $cities = [];
        foreach (City::all() as $city) {
            $cities[] = array_merge($city->toArray(), []);
        }

        return response()->json([
            'cities' => $cities,
        ]);
    }

    public function show($id)
    {
        $quarter = Quarter::find($id);
        if (!$quarter) return response()->json([
            'message' => UtilController::message('Quartier inexistant.', 'danger'),
        ]);

        $cities = [];
        foreach (City::all() as $city) {
            $cities[] = $city->toArray();
        }

        return response()->json([
            'quarter' => $quarter,
            'cities' => $cities,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        $input = $request->all();

        Quarter::create($input);

        return response()->json([
            'message' => UtilController::message('Quartier créé avec succès.', 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $quarter = Quarter::find($id);
        if (!$quarter) return response()->json([
            'message' => UtilController::message('Quartier inexistant.', 'danger'),
        ]);

        $request->validate($this->rules);

        $input = $request->all();

        $quarter->update($input);

        return response()->json([
            'message' => UtilController::message('Quartier modifié avec succès.', 'success'),
            'quarter' => $quarter,
        ]);
    }

    public function destroy($id)
    {
        $quarter = Quarter::find($id);
        if (!$quarter) return response()->json([
            'message' => UtilController::message('Quartier inexistant.', 'danger'),
        ]);

        $quarter->delete();

        $data = $this->data();

        $quarters = $data['quarters'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message('Quartier supprimé avec succès.', 'success'),
            'quarters' => $quarters,
            'total' => $total,
        ]);
    }
}
