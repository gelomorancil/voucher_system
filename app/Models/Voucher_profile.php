<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voucher_profile extends Model
{
    //
    use HasFactory;

    protected $table = 'tbl_voucher_profiles';
    protected $fillable = [
        'voucher_name',
        'voucher_description',
        'image_name',
        'uid'
    ];
}
