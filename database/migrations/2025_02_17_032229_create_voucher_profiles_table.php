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
        Schema::create('tbl_voucher_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('voucher_name');
            $table->string('voucher_description');
            $table->string('image_name')->nullable();
            $table->timestamps();
            $table->integer('active')->default('1');
            $table->integer('uid');
        });
    }   

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('voucher_profiles');
    }
};
