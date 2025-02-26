<?php

namespace App\Http\Controllers;

use App\Models\Voucher_parents;
use App\Models\Voucher_profile;
use App\Models\Voucher_child;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Inertia\Inertia;

class VoucherParentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
//     public function index()
// {
//     $all_voucher_profiles = Voucher_profile::all();
//     $voucher_parent = Voucher_parents::with('voucher_profile')->get();

//     return Inertia::render('VoucherParents/Index', [
//         'voucher_parents' => $voucher_parent,
//         'all_voucher_profiles' => $all_voucher_profiles,
//         'success' => session('success'),
//         'error' => session('error'),
//     ]);
// }

public function index()
{
    $all_voucher_profiles = Voucher_profile::all();

    $voucher_parents = Voucher_parents::with('voucher_profile')
        ->withCount([
            'voucher_children as buy_count' => function ($query) {
                $query->where('buy', 1); 
            },
            'voucher_children as claimed_count' => function ($query) {
                $query->where('claim', 1);
            },
            'voucher_children as not_bought_or_claimed_count' => function ($query) {
                $query->where('buy', 0)->where('claim', 0);
            }
        ])
        ->get();

    return Inertia::render('VoucherParents/Index', [
        'voucher_parents' => $voucher_parents,
        'all_voucher_profiles' => $all_voucher_profiles,
        'success' => session('success'),
        'error' => session('error'),
    ]);
}


public function countAll()
{
    // Count total voucher children
    $total = Voucher_child::count();

    // Count vouchers where buy = 1
    $total_buy = Voucher_child::where('buy', 1)->count();

    // Count vouchers where claim = 1
    $total_claimed = Voucher_child::where('claim', 1)->count();

    // Count vouchers where buy = 0 and claim = 0
    $not_bought_or_claimed = Voucher_child::where('buy', 0)->where('claim', 0)->count();

    return response()->json([
        'total' => $total,
        'total_buy' => $total_buy,
        'total_claimed' => $total_claimed,
        'not_bought_or_claimed' => $not_bought_or_claimed,
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

            $new_parent = Voucher_parents::create([
            'voucher_id'=>$request->voucher_id,
                'qty'=>$request->qty
            ]);

            for ($i = 0; $i < $request->qty; $i++) {
                $currentDate = now()->format('Ymd');
                $controlNo = $currentDate . $new_parent->id .str_pad($i + 1, 2, '0', STR_PAD_LEFT);
                
                // Create the Voucher_child
                Voucher_child::create([
                    'voucher_parent_id' => $new_parent->id,
                    'control_no' => $controlNo, 
                ]);
            }
            
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
