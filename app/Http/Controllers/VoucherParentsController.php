<?php

namespace App\Http\Controllers;

use App\Models\Voucher_parents;
use App\Models\Voucher_profile;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Inertia\Inertia;

class VoucherParentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $all_voucher_profiles = Voucher_profile::all();
        $voucher_parent = Voucher_parents::all();
        return Inertia::render('VoucherParents/Index', [
            'voucher_parents' => $voucher_parent,
            'all_voucher_profiles' => $all_voucher_profiles
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'voucher_id'=>'required | int',
            'qty'=>'required | int'
        ]);

        Voucher_parents::create([
            'voucher_id'=>$request->voucher_id,
            'qty'=>$request->qty
        ]);
        // try{

        // }catch(\Exception $e){

        // }
    }

    /**
     * Display the specified resource.
     */
    public function show(Voucher_parents $voucher_parents)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Voucher_parents $voucher_parents)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Voucher_parents $voucher_parents)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Voucher_parents $voucher_parents)
    {
        //
    }
}
