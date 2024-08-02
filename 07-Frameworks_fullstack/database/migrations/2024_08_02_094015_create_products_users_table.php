<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('products_users', function (Blueprint $table) {
            $table->id();
            $table->unsignedBiginteger('products_id');
            $table->unsignedBiginteger('users_id');


            $table->foreign('products_id')->references('id')
                 ->on('products')->onDelete('cascade');
            $table->foreign('users_id')->references('id')
                ->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('produts_users');
    }
};
