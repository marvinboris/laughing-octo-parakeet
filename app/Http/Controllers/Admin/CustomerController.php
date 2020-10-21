<?php

namespace App\Http\Controllers\Admin;

use App\City;
use App\Customer;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    private $rules = [
        'name' => 'required|string',
        'phone' => 'required|string',
        'city' => 'required|exists:cities,id',
        'quarter' => 'required|exists:quarters,id',
        'photo' => 'nullable|image',
        'nid_canal' => 'nullable|string',
        'nid_eneo' => 'nullable|string',
        'nid_camwater' => 'nullable|string',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $data = [];
        $filteredData = Customer::latest();

        $filteredData = $filteredData
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('nid_canal', 'LIKE', "%$search%")
                        ->orWhere('nid_eneo', 'LIKE', "%$search%")
                        ->orWhere('nid_camwater', 'LIKE', "%$search%")
                        ->orWhere('phone', 'LIKE', "%$search%")
                        ->orWhere('name', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $customer) {
            $data[] = array_merge($customer->toArray(), []);
        }

        return [
            'customers' => $data,
            'total' => $total,
        ];
    }



    public function  index()
    {
        $data = $this->data();

        $customers = $data['customers'];
        $total = $data['total'];

        return response()->json([
            'customers' => $customers,
            'total' => $total,
        ]);
    }

    public function info()
    {
        $cities = [];
        foreach (City::all() as $city) {
            $cities[] = array_merge($city->toArray(), [
                'quarters' => $city->quarters,
            ]);
        }

        return response()->json([
            'cities' => $cities,
        ]);
    }

    public function show($id)
    {
        $customer = Customer::find($id);
        if (!$customer) return response()->json([
            'message' => UtilController::message('Client inexistant.', 'danger'),
        ]);

        $customer = $customer->toArray() + [
            'quarter' => $customer->quarter_id,
            'city' => $customer->quarter->city_id,
        ];

        $cities = [];
        foreach (City::all() as $city) {
            $cities[] = array_merge($city->toArray(), [
                'quarters' => $city->quarters,
            ]);
        }

        return response()->json([
            'customer' => $customer,
            'cities' => $cities,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        $input = $request->except('photo');

        if ($file = $request->file('photo')) {
            $fileName = time() . $file->getClientOriginalName();
            $file->move('customers', $fileName);
            $input['photo'] = htmlspecialchars($fileName);
        }
        $input['country'] = env('COUNTRY', 'cm');
        $input['quarter_id'] = $request->quarter;

        Customer::create($input);

        return response()->json([
            'message' => UtilController::message('Client créé avec succès.', 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $customer = Customer::find($id);
        if (!$customer) return response()->json([
            'message' => UtilController::message('Client inexistant.', 'danger'),
        ]);

        $request->validate($this->rules);

        $input = $request->except('photo');

        if ($file = $request->file('photo')) {
            if ($customer->photo) unlink(public_path($customer->photo));
            $fileName = time() . $file->getClientOriginalName();
            $file->move('customers', $fileName);
            $input['photo'] = htmlspecialchars($fileName);
        }
        $input['quarter_id'] = $request->quarter;

        $customer->update($input);

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Client modifié avec succès.'
            ],
        ]);
    }

    public function destroy($id)
    {
        $customer = Customer::find($id);
        if (!$customer) return response()->json([
            'message' => UtilController::message('Client inexistant.', 'danger'),
        ]);

        if ($customer->photo) unlink(public_path($customer->photo));
        $customer->delete();

        $data = $this->data();

        $customers = $data['customers'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message('Client supprimé avec succès.', 'success'),
            'customers' => $customers,
            'total' => $total,
        ]);
    }
}
