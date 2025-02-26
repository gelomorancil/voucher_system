<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voucher_child extends Model
{
    //

    use HasFactory;
    protected $table='tbl_voucher_child';

    protected $fillable=[
        'voucher_parent_id',
        'control_no',
        'buy',
        'claim'
    ];

    public function voucher_parent(){
        return $this-> belongsTo(Voucher_parents::class, 'voucher_parent_id');
    }
}
