<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    protected $fillable = [
        'name', 'prefix',
    ];

    public function roles()
    {
        return $this->belongsToMany('App\Role', 'feature_role')->withPivot(['access']);
    }

    public function getAccessAttribute($value)
    {
        return json_decode($value);
    }
}
