<?php

namespace App\Http\Controllers;

use App\Models\Voucher_profile;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Inertia\Inertia;

class VoucherProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $all_voucher_profiles = Voucher_profile::all();
        return Inertia::render("VoucherProfiles/Index", [
            'all_voucher_profiles' => $all_voucher_profiles
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render("VoucherProfiles/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'voucher_name' => 'required | string',
            'voucher_description' => 'required | string',
        ]);
        try {
            Voucher_profile::create([
                'voucher_name' => $request->voucher_name,
                'voucher_description' => $request->voucher_description,
            ]);

            // return Inertia::render("/dashboard");
            return redirect(route('dashboard'));
        } catch (\Exception $e) {
            return redirect(route('voucher.create'))->with('error', $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Voucher_profile $voucher_profile)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Voucher_profile $voucher_profile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Voucher_profile $voucher_profile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Voucher_profile $voucher_profile)
    {
        //
    }
}
