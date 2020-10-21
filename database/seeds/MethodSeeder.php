<?php

use App\Method;
use Illuminate\Database\Seeder;

class MethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $methods = [
            [
                'name' => 'Bitcoin',
                'text' => 'Bitcoin',
            ],
            [
                'name' => 'Mobile',
                'text' => 'Mobile Payment',
            ],
            [
                'name' => 'Limo',
                'text' => 'Payment using Limo account',
            ],
            [
                'name' => 'Admin',
                'text' => 'Admin',
            ],
        ];

        foreach ($methods as $method) {
            Method::create($method);
        }
    }
}
