<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Voucher_child extends Model
{
    //
    protected $table='tbl_voucher_child';

    protected $fillable=[
        'voucher_parent_id',
        'control_no'
    ];
}
