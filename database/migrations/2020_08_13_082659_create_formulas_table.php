<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormulasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('formulas', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('photo');
            $table->float('price_xaf');
            $table->float('price_limo');
            $table->integer('channel_tv');
            $table->integer('channel_radio');
            $table->string('created_by');
            $table->tinyInteger('status');
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
        Schema::dropIfExists('formulas');
    }
}
