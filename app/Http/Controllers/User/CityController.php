<?php

namespace App\Http\Controllers\User;

use App\City;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use Illuminate\Http\Request;

class CityController extends Controller
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

        $cities = [];
        $filteredData = City::orderBy('id');

        $filteredData = $filteredData
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $city) {
            $cities[] = $city->toArray();
        }

        return [
            'cities' => $cities,
            'total' => $total,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $cities = $data['cities'];
        $total = $data['total'];

        return response()->json([
            'cities' => $cities,
            'total' => $total,
        ]);
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $city = City::find($id);
        if (!$city) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['cities']['not_found'], 'danger'),
        ]);

        return response()->json([
            'city' => $city,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate($this->rules);

        $input = $request->all();

        City::create($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['cities']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $city = City::find($id);
        if (!$city) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['cities']['not_found'], 'danger'),
        ]);

        $request->validate($this->rules);

        $input = $request->all();

        $city->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['cities']['updated'], 'success'),
            'city' => $city,
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $city = City::find($id);
        if (!$city) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['cities']['not_found'], 'danger'),
        ]);

        $city->delete();

        $data = $this->data();

        $cities = $data['cities'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['cities']['deleted'], 'success'),
            'cities' => $cities,
            'total' => $total,
        ]);
    }
}
