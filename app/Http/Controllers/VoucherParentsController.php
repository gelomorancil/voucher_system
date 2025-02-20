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
    $all_voucher_profiles = Voucher_profile::all();
    $voucher_parent = Voucher_parents::with('voucher_profile')->get();

    return Inertia::render('VoucherParents/Index', [
        'voucher_parents' => $voucher_parent,
        'all_voucher_profiles' => $all_voucher_profiles,
        'success' => session('success'),
        'error' => session('error'),
    ]);
}



// MAIN READY FUNCTION QUERY
    // public function index()
    // {
    //     //
    //     $all_voucher_profiles = Voucher_profile::all();
    //     $voucher_parent = Voucher_parents::all();
    //     return Inertia::render('VoucherParents/Index', [
    //         'voucher_parents' => $voucher_parent,
    //         'all_voucher_profiles' => $all_voucher_profiles
    //     ]);
    // }

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
        try{
            Voucher_parents::create([
                'voucher_id'=>$request->voucher_id,
                'qty'=>$request->qty
            ]);
            return redirect(route('parent.index'))->with('success','i miss you');
        }catch(\Exception $e){
            return redirect(route('parent.index'))->with('error','i miss you');
        }
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
    public function edit($id)
    {
        //
        $voucher_parent = Voucher_parents::find($id);
        return Inertia::render('VoucherParent/Edit', [
            'voucher_parent'=> $voucher_parent
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
        //
        $request->validate([
            'voucher_id'=>'required | int',
            'qty'=>'required | int'
        ]);  
        
        Voucher_parents::where('id', $id)->update([
            'voucher_id'=>$request->voucher_id,
            'qty'=>$request->qty
        ]);
        try{
           
            return redirect(route('parent.index'))->with('success','Update Finished');
        }catch(\Exception $e){
            return redirect(route('parent.index'))->with('error','i miss you');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        Voucher_parents::where('id', $id)->delete();
    }
}
