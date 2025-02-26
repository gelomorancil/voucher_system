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
        return Inertia::render('VoucherChild/Partials/VoucherChildPrintPreview', [
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
