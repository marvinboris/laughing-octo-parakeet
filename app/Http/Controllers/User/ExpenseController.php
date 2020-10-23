<?php

namespace App\Http\Controllers\User;

use App\Admin;
use App\Expense;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Method;
use Illuminate\Http\Request;

class ExpenseController extends Controller
{
    private $rules = [
        'amount' => 'required|numeric',
        'description' => 'required|string',
        'method_id' => 'required|exists:methods,id',
        'date' => 'required|date',
        'proof' => 'nullable|image',
        'expendable_type' => 'required|string',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $data = [];
        $filteredData = Expense::latest();

        $filteredData = $filteredData
            ->join('methods', 'methods.id', '=', 'expenses.method_id')
            ->select('expenses.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('amount', 'LIKE', "%$search%")
                        ->orWhere('description', 'LIKE', "%$search%")
                        ->orWhere('methods.name', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $expense) {
            $expendable_type = explode('\\', $expense->expendable_type);

            $data[] = $expense->toArray() + [
                'method' => $expense->method->name,
                'expendable' => end($expendable_type),
                'expender' => $expense->expender->name,
            ];
        }

        return [
            'expenses' => $data,
            'total' => $total,
        ];
    }



    public function  index()
    {
        $data = $this->data();

        $expenses = $data['expenses'];
        $total = $data['total'];

        return response()->json([
            'expenses' => $expenses,
            'total' => $total,
        ]);
    }

    public function info()
    {
        $methods = [];
        foreach (Method::all() as $method) {
            $methods[] = $method->toArray();
        }

        return response()->json([
            'methods' => $methods,
            'expendables' => [
                [
                    'id' => 'App\Canal',
                    'name' => 'Canal',
                ]
            ],
        ]);
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $expense = Expense::find($id);
        if (!$expense) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['expenses']['not_found'], 'danger'),
        ]);

        $expense = $expense->toArray() + [
            'method' => $expense->method_id,
        ];

        $methods = [];
        foreach (Method::all() as $method) {
            $methods[] = $method->toArray();
        }

        return response()->json([
            'expense' => $expense,
            'methods' => $methods,
            'expendables' => [
                [
                    'id' => 'App\Canal',
                    'name' => 'Canal',
                ]
            ],
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate($this->rules);

        $input = $request->except('proof');

        if ($file = $request->file('proof')) {
            $fileName = time() . $file->getClientOriginalName();
            $file->move('expenses', $fileName);
            $input['proof'] = htmlspecialchars($fileName);
        }
        $input['expender_type'] = Admin::class;
        $input['expender_id'] = $request->user()->id;

        Expense::create($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['expenses']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $expense = Expense::find($id);
        if (!$expense) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['expenses']['not_found'], 'danger'),
        ]);

        $request->validate($this->rules);

        $input = $request->except('proof');

        if ($file = $request->file('proof')) {
            if ($expense->proof) unlink(public_path($expense->proof));
            $fileName = time() . $file->getClientOriginalName();
            $file->move('expenses', $fileName);
            $input['proof'] = htmlspecialchars($fileName);
        }

        $expense->update($input);

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => $cms['pages'][$user->language->abbr]['messages']['expenses']['updated']
            ],
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $expense = Expense::find($id);
        if (!$expense) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['expenses']['not_found'], 'danger'),
        ]);

        if ($expense->proof) unlink(public_path($expense->proof));
        $expense->delete();

        $data = $this->data();

        $expenses = $data['expenses'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['expenses']['deleted'], 'success'),
            'expenses' => $expenses,
            'total' => $total,
        ]);
    }
}
