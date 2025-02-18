<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voucher_parents extends Model
{
    //

    use HasFactory;

    protected $table  = 'tbl_voucher_parents';

    protected $fillable = [
        'voucher_id',
        'qty'
    ];
}
