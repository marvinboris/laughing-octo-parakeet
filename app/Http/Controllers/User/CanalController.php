<?php

namespace App\Http\Controllers\User;

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
        'formulae' => [
            'name' => 'required|string|unique:formulas',
            'price_xaf' => 'required|numeric',
            'price_limo' => 'required|numeric',
            'channel_tv' => 'required|integer',
            'channel_radio' => 'required|integer',
            'status' => 'required|integer',
        ],
        'subscriptions' => [
            'customer_id' => 'required|exists:customers,id',
            'formula_id' => 'required|exists:formulas,id',
            'method_id' => 'required|exists:methods,id',
            'duration' => 'required|integer',
        ],
    ];

    private function data($status = '')
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $data = [];
        $filteredData = [];
        switch ($status) {
            case 'formulae':
                $filteredData = Formula::latest();

                $filteredData = $filteredData
                    ->where(function ($query) use ($search) {
                        if ($search !== "")
                            $query->where('name', 'LIKE', "%$search%")
                                ->orWhere('price_xaf', 'LIKE', "%$search%")
                                ->orWhere('price_limo', 'LIKE', "%$search%")
                                ->orWhere('created_by', 'LIKE', "%$search%");
                    });

                $total = $filteredData->count();

                if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

                $filteredData = $filteredData->get();

                foreach ($filteredData as $item) {
                    $data[] = array_merge($item->toArray(), []);
                }
                break;
            case 'subscriptions':
                $filteredData = Canal::latest();

                $filteredData = $filteredData
                    ->join('customers', 'customers.id', '=', 'canals.customer_id')
                    ->join('formulas', 'formulas.id', '=', 'canals.formula_id')
                    ->join('methods', 'methods.id', '=', 'canals.method_id')
                    ->select('canals.*')
                    ->where(function ($query) use ($search) {
                        if ($search !== "")
                            $query->where('customers.nid_canal', 'LIKE', "%$search%")
                                ->orWhere('formulas.name', 'LIKE', "%$search%")
                                ->orWhere('methods.name', 'LIKE', "%$search%")
                                ->orWhere('customers.name', 'LIKE', "%$search%");
                    });

                $total = $filteredData->count();

                if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

                $filteredData = $filteredData->get();

                foreach ($filteredData as $item) {
                    $data[] = array_merge($item->toArray(), [
                        'nid_canal' => $item->customer->nid_canal,
                        'formula' => $item->formula->name,
                        'method' => $item->method->name,
                        'customer' => $item->customer->name,
                    ]);
                }
                break;
        }

        return [
            'data' => $data,
            'total' => $total,
        ];
    }



    public function formulae()
    {
        $data = $this->data('formulae');

        $formulae = $data['data'];
        $total = $data['total'];

        return response()->json([
            'formulae' => $formulae,
            'total' => $total,
        ]);
    }

    public function formulae_store(Request $request)
    {
        $email = UtilController::get($request)->email;

        $request->validate($this->rules['formulae']);

        Formula::create($request->all() + [
            'created_by' => $email,
        ]);

        return response()->json([
            'message' => UtilController::message('La formule a été créée avec succès.', 'success'),
        ]);
    }

    public function formulae_update(Request $request, $id)
    {
        $subscription = Formula::find($id);
        if (!$subscription) return response()->json([
            'message' => UtilController::message('La formule n\'existe pas.', 'danger'),
        ]);

        $request->validate($this->rules['formulae']);

        $input = $request->all();

        $subscription->update($input);

        return response()->json([
            'message' => UtilController::message('La formule a été modifiée avec succès.', 'success'),
        ]);
    }

    public function formulae_destroy($id)
    {
        $subscription = Formula::find($id);
        if (!$subscription) return response()->json([
            'message' => UtilController::message('La formule n\'existe pas.', 'danger'),
        ]);

        $subscription->delete();

        return response()->json([
            'message' => UtilController::message('La formule a été supprimée avec succès.', 'success'),
        ]);
    }



    public function subscriptions()
    {
        $data = $this->data('subscriptions');

        $subscriptions = $data['data'];
        $total = $data['total'];

        return response()->json([
            'subscriptions' => $subscriptions,
            'total' => $total,
        ]);
    }

    public function subscriptions_info()
    {
        $customers = Customer::all();
        $formulae = Formula::all();
        $methods = Method::all();

        return response()->json([
            'customers' => $customers,
            'formulae' => $formulae,
            'methods' => $methods,
        ]);
    }

    public function subscriptions_store(Request $request)
    {
        $request->validate($this->rules['subscriptions']);

        Canal::create($request->all());

        return response()->json([
            'message' => UtilController::message('L\'abonnement a été créé avec succès.', 'success'),
        ]);
    }

    public function subscriptions_update(Request $request, $id)
    {
        $subscription = Canal::find($id);
        if (!$subscription) return response()->json([
            'message' => UtilController::message('L\'abonnement n\'existe pas.', 'danger'),
        ]);

        $request->validate($this->rules['subscriptions']);

        $input = $request->all();

        $subscription->update($input);

        return response()->json([
            'message' => UtilController::message('L\'abonnement a été modifié avec succès.', 'success'),
        ]);
    }

    public function subscriptions_destroy($id)
    {
        $subscription = Canal::find($id);
        if (!$subscription) return response()->json([
            'message' => UtilController::message('L\'abonnement n\'existe pas.', 'danger'),
        ]);

        $subscription->delete();

        return response()->json([
            'message' => UtilController::message('L\'abonnement a été supprimé avec succès.', 'success'),
        ]);
    }
}
