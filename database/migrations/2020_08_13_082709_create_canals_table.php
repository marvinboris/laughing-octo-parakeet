<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCanalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('canals', function (Blueprint $table) {
            $table->id();
            $table->integer('customer_id')->unsigned()->index();
            $table->integer('formula_id')->unsigned()->index();
            $table->integer('method_id')->unsigned()->index();
            $table->float('price_xaf')->nullable();
            $table->float('price_limo')->nullable();
            $table->date('date');
            $table->integer('duration');
            $table->float('amount_received_xaf')->nullable();
            $table->float('amount_received_limo')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('canals');
    }
}
