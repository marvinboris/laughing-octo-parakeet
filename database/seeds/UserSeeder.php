<?php

use App\Role;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name' => 'Boris Ndouma',
                'email' => 'jaris.ultio.21@gmail.com',
                'phone' => '237655588688',
                'password' => Hash::make('12345'),
                'role_id' => Role::first()->id,
            ],
            [
                'name' => 'Briand Yungong',
                'email' => 'yungongbriand@gmail.com',
                'phone' => '237694422723',
                'password' => Hash::make('11223344'),
                'role_id' => Role::first()->id,
            ],
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}