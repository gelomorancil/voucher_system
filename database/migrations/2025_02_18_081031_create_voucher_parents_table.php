<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tbl_voucher_parents', function (Blueprint $table) {
            $table->id();
            $table->integer('voucher_id');
            $table->integer('qty');
            $table->timestamps();
            $table->integer('active')->default('1');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('voucher_parents');
    }
};
