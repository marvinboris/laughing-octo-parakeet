<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Method extends Model
{
    use Sluggable;

    protected $fillable = [
        'name', 'text', 'slug'
    ];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    public function expenses()
    {
        return $this->hasMany('App\Expense');
    }

    public function canals()
    {
        return $this->hasMany('App\Canal');
    }
}
