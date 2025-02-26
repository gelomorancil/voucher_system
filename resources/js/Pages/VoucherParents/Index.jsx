import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Create from "../VoucherParents/Create";
import DeleteVoucherParentForm from "./Partials/DeleteVoucherParentForm";
import EditVoucherParentForm from "./Partials/EditVoucherParentForm";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";

const Index = ({ all_voucher_profiles, voucher_parents, success, error }) => {
    return (
        <>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Dashboard/Parent/Voucher/List
                    </h2>
                }
            >
                <Head title="Dashboard" />
                <div className="py-12 px-60">
                    <div className="mx-auto sm:px-6 lg:px-8 flex gap-10 justify-between max-w-7xl my-4">
                        <div className="card w-full h-20 bg-yellow-200">
                            Total Quantity
                        </div>
                        <div className="card w-full h-20 bg-yellow-200">
                            Total Bought Total Not Bought
                        </div>
                        <div className="card w-full h-20 bg-yellow-200">
                            Total Claimed
                        </div>
                    </div>
                    <div className="mx-auto sm:px-6 lg:px-8 flex gap-10 justify-between max-w-7xl my-4">
                        <TextInput
                            id="qty"
                            name="qty"
                            type="text"
                            // value={data.qty}
                            isFocused={true}
                            className="mt-1 block w-full"
                            // onChange={(e) => setData("qty", e.target.value)}
                        />
                        <button>Bought</button>
                        <button>Claimed</button>
                    </div>
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="bg-white shadow-sm sm:rounded-lg p-4">
                            <div className="w-full">
                                {success && (
                                    <div className="alert alert-success">
                                        {success}
                                    </div>
                                )}
                                {error && (
                                    <div className="alert alert-danger">
                                        {error}
                                    </div>
                                )}
                            </div>
                            {/* <Create /> */}
                            <Create voucher_profiles={all_voucher_profiles} />
                            {/* <button>Create Parent</button> */}
                            <div className="w-full shadow-md">
                                <table className="min-w-full table-fixed border-collapse">
                                    <thead>
                                        <tr className="bg-gray-200 text-left">
                                            <th className="px-4 py-2 border">
                                                ID
                                            </th>
                                            <th className="px-4 py-2 border">
                                                Voucher Name
                                            </th>
                                            <th className="px-4 py-2 border">
                                                Description
                                            </th>
                                            <th className="px-4 py-2 border">
                                                Quantity
                                            </th>
                                            <th className="px-4 py-2 border">
                                                Bought
                                            </th>
                                            <th className="px-4 py-2 border">
                                                Claimed
                                            </th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {voucher_parents.map((parent) => (
                                            <tr
                                                key={parent.id}
                                                className="border-t"
                                            >
                                                <td className="px-4 py-2">
                                                    {parent.id}
                                                </td>
                                                <td className="px-4 py-2">
                                                    {
                                                        parent.voucher_profile
                                                            .voucher_name
                                                    }
                                                </td>

                                                <td className="px-4 py-2">
                                                    {
                                                        parent.voucher_profile
                                                            .voucher_description
                                                    }
                                                </td>
                                                <td className="px-4 py-2">
                                                    {parent.qty}
                                                </td>
                                                <td className="px-4 py-2">
                                                    {parent.buy_count}
                                                </td>
                                                <td className="px-4 py-2">
                                                    {parent.claimed_count}
                                                </td>
                                                <td className="py-2 hover:cursor-pointer">
                                                    <div className="flex">
                                                        {/* FOR EDIT */}
                                                        {/* <Link href={route('child.show',parent.id)} className="p-4 bg-yellow-50">Print</Link> */}
                                                        <button
                                                            onClick={() =>
                                                                window.open(
                                                                    route(
                                                                        "child.show",
                                                                        parent.id
                                                                    ),
                                                                    "_blank"
                                                                )
                                                            }
                                                            className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                                                        >
                                                            Print
                                                        </button>

                                                        <EditVoucherParentForm
                                                            voucher_parents={
                                                                parent
                                                            }
                                                            voucher_profiles={
                                                                all_voucher_profiles
                                                            }
                                                        />

                                                        {/* DELETE BUTTON SHEESHKEBABERS */}
                                                        {/* <DeleteVoucherProfileForm id={voucher.id}/> */}
                                                        <DeleteVoucherParentForm
                                                            id={parent.id}
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
