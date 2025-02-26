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
        Schema::create('tbl_voucher_child', function (Blueprint $table) {
            $table->id();
            $table->integer('voucher_parent_id');
            $table->string('control_no')->nullable(true);
            $table->timestamps();
            $table->integer('buy')->default('0');
            $table->integer('claim')->default('0');
        });
    }

    /**
     * Reverse the migrations.
     */ 
    public function down(): void
    {
        Schema::dropIfExists('voucher_children');
    }
};
