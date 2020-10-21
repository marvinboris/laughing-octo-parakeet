<?php

namespace App\Http\Controllers\Admin;

use App\Canal;
use App\Customer;
use App\Formula;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Method;
use Illuminate\Http\Request;

class CanalController extends Controller
{
    private $rules = [
        'formula_id' => 'required|exists:formulas,id',
        'customer_id' => 'required|exists:customers,id',
        'method_id' => 'required|exists:methods,id',
        'date' => 'required|date',
        'duration' => 'required|numeric',
        'amount_received_xaf' => 'nullable|numeric',
        'amount_received_limo' => 'nullable|numeric',
    ];

    private function data()
    {
        $canals = [];
        foreach (Canal::all() as $canal) {
            $canals[] = array_merge($canal->toArray(), [
                'formula' => $canal->formula->name,
            ]);
        }

        return $canals;
    }



    public function index()
    {
        $canals = $this->data();

        $formulas = Formula::all();
        $customers = Customer::all();
        $methods = Method::all();

        return response()->json([
            'canals' => $canals,
            'formulas' => $formulas,
            'customers' => $customers,
            'methods' => $methods,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        Canal::create($request->all());

        $canals = $this->data();

        return response()->json([
            'message' => UtilController::message('Successfully created canal.', 'success'),
            'canals' => $canals,
        ]);
    }

    public function update(Request $request, $id)
    {
        $canal = Canal::find($id);
        if (!$canal) return response()->json([
            'message' => UtilController::message('Canal does not exist.', 'danger'),
        ]);

        $request->validate($this->rules);

        $canal->update($request->all());

        $canals = $this->data();

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Successfully updated canal.'
            ],
            'canals' => $canals
        ]);
    }

    public function destroy($id)
    {
        $canal = Canal::find($id);
        if (!$canal) return response()->json([
            'message' => UtilController::message('Canal does not exist.', 'danger'),
        ]);

        $canal->delete();

        $canals = $this->data();

        return response()->json([
            'message' => UtilController::message('Successfully deleted canal.', 'success'),
            'canals' => $canals
        ]);
    }
}
