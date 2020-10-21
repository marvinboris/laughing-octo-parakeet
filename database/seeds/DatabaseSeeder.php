<?php

use App\Quarter;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(AdminSeeder::class);
        $this->call(RoleSeeder::class);
        $this->call(FeatureSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(MethodSeeder::class);
        $this->call(CitySeeder::class);
        $this->call(QuarterSeeder::class);
        $this->call(LanguageSeeder::class);
    }
}
