<?php

namespace App\Http\Controllers\Admin;

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
        $expense = Expense::find($id);
        if (!$expense) return response()->json([
            'message' => UtilController::message('Dépense inexistante.', 'danger'),
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
            'message' => UtilController::message('Dépense créée avec succès.', 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $expense = Expense::find($id);
        if (!$expense) return response()->json([
            'message' => UtilController::message('Dépense inexistante.', 'danger'),
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
                'content' => 'Dépense modifiée avec succès.'
            ],
        ]);
    }

    public function destroy($id)
    {
        $expense = Expense::find($id);
        if (!$expense) return response()->json([
            'message' => UtilController::message('Dépense inexistante.', 'danger'),
        ]);

        if ($expense->proof) unlink(public_path($expense->proof));
        $expense->delete();

        $data = $this->data();

        $expenses = $data['expenses'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message('Dépense supprimée avec succès.', 'success'),
            'expenses' => $expenses,
            'total' => $total,
        ]);
    }
}
