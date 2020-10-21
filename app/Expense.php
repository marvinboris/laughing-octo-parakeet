<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    protected $directory = '/expenses/';

    protected $fillable = [
        'amount', 'description', 'date', 'expendable_type', 'expender_type', 'expender_id', 'method_id', 'proof'
    ];

    public function expender()
    {
        return $this->morphTo();
    }

    public function method()
    {
        return $this->belongsTo('App\Method');
    }

    public function getProofAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }
}
