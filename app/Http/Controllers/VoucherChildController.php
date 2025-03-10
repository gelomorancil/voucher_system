<?php

namespace App\Http\Controllers;

use App\Models\Voucher_child;
use App\Models\Voucher_parents;
use App\Models\Voucher_profile;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VoucherChildController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Eager load parents and profiles for each child
        $child = Voucher_child::with(['voucher_parent.voucher_profile'])->paginate(100);

        return Inertia::render('VoucherChild/Index', [
            'child' => $child
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function count($id)
    {
        //
        $voucher_child = Voucher_child::with(['voucher_parent'])->where('voucher_parent_id', $id)->get();
        return Inertia::render('VoucherChild/Partials/VoucherChildPrintPreview', [
            'voucher_child' => $voucher_child,
            // 'profile' => $voucher_profile,
            // 'parent' => $voucher_parents,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        $voucher_child = Voucher_child::with(['voucher_parent.voucher_profile'])->where('voucher_parent_id', $id)->get();
        // $voucher_profile = Voucher_profile::all();
        // $voucher_parents = Voucher_parents::all();
        // $voucher_child = Voucher_child::where('voucher_parent_id', $id)->get();
        // $voucher_child = Voucher_child::findAll();
        // return Inertia::render('VoucherChild/Partials/VoucherChildPrintPreview', [
            return Inertia::render('Voucher/Partials/PrintPreview', [
            'voucher_child' => $voucher_child,
            // 'profile' => $voucher_profile,
            // 'parent' => $voucher_parents,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Voucher_child $voucher_child)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function updateBuy(Request $request)
    {
        $request->validate([
            'control_no' => 'required|integer',
        ]);

        $voucher = Voucher_child::where('control_no', $request->control_no)->first();

        if (!$voucher) {
            return redirect(route('parent.index'))->with('error', 'Voucher does not exist!');
        }

        if ($voucher->buy == 1 || $voucher->claim == 1) {
            return redirect(route('parent.index'))->with('error', 'Voucher is already been used!');
        }

        try {
            $voucher->update([
                'buy' => 1,
                // 'claim' => 0,
            ]);
            
            return redirect(route('parent.index'))->with('success', 'Voucher successfully bought.');
        } catch (\Exception $e) {
            return redirect(route('parent.index'))->with('error', 'Uh oh, something went wrong.');
        }
    }
    
    public function updateClaim(Request $request)
    {
        $request->validate([
            'control_no' => 'required|integer',
        ]);

        $voucher = Voucher_child::where('control_no', $request->control_no)->first();

        if (!$voucher) {
            return redirect(route('parent.index'))->with('error', 'Voucher does not exist!');
        }

        if ($voucher->buy == 0 || $voucher->claim == 1) {
            return redirect(route('parent.index'))->with('error', "Voucher hasn't been bought yet ");
        }

        try {
            $voucher->update([
                // 'buy' => 0,
                'claim' => 1,
            ]);

            return redirect(route('parent.index'))->with('success', 'Voucher successfully claimed.');
        } catch (\Exception $e) {
            return redirect(route('parent.index'))->with('error', 'Uh oh, something went wrong.');
        }
    }


    public function update(Request $request, Voucher_child $voucher_child)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Voucher_child $voucher_child)
    {
        //
    }
}
