<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $directory = '/customers/';

    protected $fillable = [
        'name', 'phone', 'photo', 'country', 'quarter_id', 'nid_canal', 'nid_eneo', 'nid_camwater',
    ];

    public function canals()
    {
        return $this->hasMany('App\Canal');
    }

    public function quarter()
    {
        return $this->belongsTo('App\Quarter');
    }

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }
}
