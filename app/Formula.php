<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Formula extends Model
{
    protected $directory = '/formulae/';

    protected $fillable = [
        'name', 'price_xaf', 'price_limo', 'channel_tv', 'channel_radio', 'created_by', 'status', 'photo'
    ];

    public function canals()
    {
        return $this->hasMany('App\Canal');
    }

    public function getPhotoAttribute($value)
    {
        return $this->directory . $value;
    }
}
