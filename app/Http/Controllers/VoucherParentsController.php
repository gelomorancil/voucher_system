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
    public function index()
{
    $user = auth()->user();

    // Check if the user is a superadmin
    $isSuperAdmin = $user->superadmin == 1;

    // If superadmin, get all voucher parents; otherwise, get only the ones uploaded by the user
    $parentQuery = Voucher_parents::where('active', 1);
    
    if (!$isSuperAdmin) {
        $parentQuery->where('uid', $user->id);
    }

    $parentIds = $parentQuery->pluck('id');

    // Count vouchers based on the superadmin condition
    $total = Voucher_child::whereIn('voucher_parent_id', $parentIds)->count();
    $bought = Voucher_child::whereIn('voucher_parent_id', $parentIds)
        ->where('buy', 1)
        ->where('claim', 0)
        ->count();
    $claimed = Voucher_child::whereIn('voucher_parent_id', $parentIds)
        ->where('claim', 1)
        ->where('buy', 1)
        ->count();
    $not_bought = Voucher_child::whereIn('voucher_parent_id', $parentIds)
        ->where('buy', 0)
        ->where('claim', 0)
        ->count();

    // If superadmin, get all profiles; otherwise, get only the user's profile
    $profileQuery = Voucher_profile::where('active', 1);
    
    if (!$isSuperAdmin) {
        $profileQuery->where('uid', $user->id);
    }

    $profile = $profileQuery->get();

    // Get parent vouchers with related voucher children counts
    $parent = $parentQuery
        ->with('voucher_profile')
        ->withCount([
            'voucher_children as buy_count' => function ($query) {
                $query->where('buy', 1)->where('claim', 0);
            },
            'voucher_children as claimed_count' => function ($query) {
                $query->where('claim', 1)->where('buy', 1);
            },
            'voucher_children as not_bought_or_claimed_count' => function ($query) {
                $query->where('buy', 0)->where('claim', 0);
            }
        ])
        ->get();

    return Inertia::render('Voucher/Index', [
        'parent' => $parent,
        'profile' => $profile,
        'success' => session('success'),
        'error' => session('error'),
        'total' => $total,
        'bought' => $bought,
        'claimed' => $claimed,
        'not_bought' => $not_bought
    ]);
}



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
            'voucher_id' => 'required | int',
            'qty' => 'required | int',
            'uid' => 'nullable',
        ]);

        try {

            $new_parent = Voucher_parents::create([
                'voucher_id' => $request->voucher_id,
                'qty' => $request->qty,
                'uid' => auth()->id(),
            ]);
            
            // Generate the child by getting the last id of the parent the creating of control no sa babaw. 
            for ($i = 0; $i < $request->qty; $i++) {
                $currentDate = now()->format('Y');
                $controlNo = $currentDate . $new_parent->id . str_pad($i + 1, 5, '0', STR_PAD_LEFT);
                Voucher_child::create([
                    'voucher_parent_id' => $new_parent->id,
                    'control_no' => $controlNo,
                ]);
            }

            return redirect(route('parent.index'))->with('success', 'Voucher Generated');
        } catch (\Exception $e) {
            return redirect(route('parent.index'))->with('error', 'Something went wrong: ' . $e->getMessage());

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
            'voucher_parent' => $voucher_parent
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
            'voucher_id' => 'required | int',
            'qty' => 'required | int'
        ]);

        Voucher_parents::where('id', $id)->update([
            'voucher_id' => $request->voucher_id,
            'qty' => $request->qty
        ]);
        try {

            return redirect(route('parent.index'))->with('success', 'Update Finished');
        } catch (\Exception $e) {
            return redirect(route('parent.index'))->with('error', 'i miss you');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // SOFT DELETE UPDATES THE ACTIVE INTO 0, SO IT WILL NOT DISPLAY ANYTHING
        Voucher_parents::where('id', $id)->update(['active' => 0]);
        // i'll remove this is if the child shouldn't be deleted my guy.
        Voucher_child::where('voucher_parent_id', $id)->delete();
        return redirect(route('parent.index'))->with('error', 'Voucher deleted.');
    }
}
