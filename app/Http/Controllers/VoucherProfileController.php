<?php

namespace App\Http\Controllers;

use App\Models\Voucher_profile;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

use Inertia\Inertia;

class VoucherProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function index($id = null)
    public function index()
{ 
    // dd(auth()->users());
    $user = auth()->user();
    $all_voucher_profiles = Voucher_profile::where('active', 1)
        ->where('uid', $user->id)
        ->get();

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
        $request->validate([
            'voucher_name' => 'required|string',
            'voucher_description' => 'required|string',
            'uid' => 'nullable',
            'image_name' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
    
        try {
            $imageName = null;
    
            if ($request->hasFile('image_name')) {
                $image = $request->file('image_name');
                $imageName = Str::random(32) . '.' . $image->getClientOriginalExtension();
    
                // Define your custom path relative to the public folder
                $destinationPath = public_path('uploads/images');
    
                // Ensure the directory exists
                if (!file_exists($destinationPath)) {
                    mkdir($destinationPath, 0755, true);
                }
    
                // Move the file to the target directory
                $image->move($destinationPath, $imageName);
            }
    
            Voucher_profile::create([
                'voucher_name' => $request->voucher_name,
                'voucher_description' => $request->voucher_description,
                'uid' => auth()->id(),
                'image_name' => $imageName,
            ]);
    
            return redirect(route('parent.index'))->with('success', 'Voucher Profile created successfully!');
        } catch (\Exception $e) {
            return redirect(route('parent.index'))->with('error', 'Something went wrong: ' . $e->getMessage());
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
    public function edit($id)
    {
        //
        $voucher_profile = Voucher_profile::find($id);
        return Inertia::render("VoucherProfiles/Edit", [
            'voucher_profile' => $voucher_profile
        ]);
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(Request $request, $id)
    {
        // FORM VALIDATION IF MAY MISSING NA ABOUT SA INPUT MAG APPEAR NI SIYA SA SA USER AS ERROR MESSAGE
        $request->validate([
            'voucher_name' => 'required|string',
            'voucher_description' => 'required|string',
        ]);

        try {
            // If validation is successful it would try to process this diri tanan itry
            Voucher_profile::where('id', $id)->update([
                'voucher_name' => $request->voucher_name,
                'voucher_description' => $request->voucher_description,
            ]);

            // Diri if goodies tanan eh ubrahan ko alert or toast para ang user ma bal an nga goodies ila update
            // return Inertia::render('VoucherProfiles/Index', [
            //     'voucher_profile' => Voucher_profile::find($id),
            //     'success' => 'Voucher updated successfully!'
            // ]);
            return redirect(route('parent.index'));
        } catch (\Exception $e) {
            // DIRI ANG ERROR NAMAN PARA MA BAL AN NILA ANO ANG PROBLEMA ANA DIRI
            return Inertia::render('Voucher/Index', [
                'voucher_profile' => null,
                'error' => $e->getMessage()
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        Voucher_profile::where('id', $id)->update(['active'=> 0]);
    }
}
