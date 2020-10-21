<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Canal extends Model
{
    protected $fillable = [
        'formula_id', 'customer_id', 'method_id', 'price_xaf', 'price_limo', 'date', 'duration', 'amount_received_xaf', 'amount_received_limo',
    ];

    public function formula()
    {
        return $this->belongsTo('App\Formula');
    }

    public function customer()
    {
        return $this->belongsTo('App\Customer');
    }

    public function method()
    {
        return $this->belongsTo('App\Method');
    }
}
