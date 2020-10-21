<?php

use App\Feature;
use App\Role;
use App\User;
use Illuminate\Database\Seeder;

class FeatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $features = [
            [
                'name' => 'Clients',
                'prefix' => 'customers',
            ],
            [
                'name' => "Formules d'Abonnement",
                'prefix' => 'formulas',
            ],
            [
                'name' => "Services Canal+",
                'prefix' => 'canals',
            ],
        ];

        foreach ($features as $feature) {
            Feature::create($feature);
        }

        foreach (Role::all() as $role) {
            foreach (Feature::all() as $feature) {
                $role->features()->attach($feature->id, [
                    'access' => json_encode(['c', 'u', 'd'])
                ]);
            }
        }
    }
}
