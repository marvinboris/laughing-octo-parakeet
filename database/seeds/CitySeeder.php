<?php

use App\City;
use Illuminate\Database\Seeder;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cities = [
            [
                'name' => 'Douala'
            ],
            [
                'name' => 'Yaoundé'
            ]
        ];

        foreach ($cities as $city) {
            City::create($city);
        }
    }
}
