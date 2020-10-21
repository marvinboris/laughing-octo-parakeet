<?php

namespace App\Http\Controllers\Admin;

use App\Canal;
use App\Customer;
use App\Expense;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $user = request()->user();

        $subscriptionsAmount = 0;
        foreach (Canal::all() as $subscription) {
            $subscriptionsAmount += $subscription->amount_received_xaf;
        }

        $totalCustomers = Customer::count();

        $expenses = 0;
        foreach (Expense::all() as $expense) {
            $expenses += $expense->amount;
        }

        $totalCase = 0;
        foreach (Canal::all() as $subscription) {
            $totalCase += $subscription->amount_received_xaf;
        }

        return response()->json([
            'blocksData' => [
                'subscriptionsAmount' => $subscriptionsAmount,
                'totalCustomers' => $totalCustomers,
                'expenses' => $expenses,
                'totalCase' => $totalCase,
            ],
            'tasks' => [],
            'attendanceReport' => [],
            'calendar' => [],
            'chatBox' => [],
            'messages' => [],
            'workTimeTracker' => [],
        ]);
    }
}
