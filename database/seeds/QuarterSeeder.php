<?php

use App\Quarter;
use Illuminate\Database\Seeder;

class QuarterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $quarters = [
            [
                'name' => 'Bali',
                'city_id' => 1,
            ],
            [
                'name' => 'Bonapriso',
                'city_id' => 1,
            ],
            [
                'name' => 'New-Bell',
                'city_id' => 1,
            ],
            [
                'name' => 'Bonanjo',
                'city_id' => 1,
            ],
            [
                'name' => 'Bastos',
                'city_id' => 2,
            ],
        ];

        foreach ($quarters as $quarter) {
            Quarter::create($quarter);
        }
    }
}
