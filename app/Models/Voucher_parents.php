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
        'qty',
        'uid'
    ];

    public function voucher_profile(){
        return $this->belongsTo(Voucher_profile::class, 'voucher_id');
    }
    
    public function voucher_children()
    {
        return $this->hasMany(Voucher_child::class, 'voucher_parent_id', 'id'); // Ensure foreign keys match DB schema
    }
}
