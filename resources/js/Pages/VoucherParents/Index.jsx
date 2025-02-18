import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Create from "../VoucherParents/Create";

const Index = ({all_voucher_profiles, voucher_parents}) => {
// const Index = ({ all_voucher_profiles }) => {
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
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                      <div className="bg-white shadow-sm sm:rounded-lg p-4">
                    {/* <Create /> */}
                    <Create voucher_profiles={all_voucher_profiles}/>
                    <button>Create Parent</button>
                    <div className="w-full shadow-md">
                        <table className="min-w-full table-auto border-collapse">
                            <thead>
                                <tr className="bg-gray-200 text-left">
                                    <th className="px-4 py-2 border">ID</th>
                                    <th className="px-4 py-2 border">
                                        Voucher Name
                                    </th>
                                    <th className="px-4 py-2 border">
                                        Description
                                    </th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {voucher_parents.map((parent) => (
                                    <tr key={parent.id} className="border-t">
                                        <td className="px-4 py-2">
                                            {parent.id}
                                        </td>
                                        <td className="px-4 py-2">
                                            {parent.id}
                                        </td>

                                        <td className="px-4 py-2">
                                            {parent.qty}
                                        </td>
                                        <td className="py-2 hover:cursor-pointer">
                                            <div className="flex">
                                              {/* FOR EDIT */}
                                                {/* <EditVoucherProfileForm voucher_profile={voucher}/> */}

                                                {/* DELETE BUTTON SHEESHKEBABERS */}
                                                {/* <DeleteVoucherProfileForm id={voucher.id}/> */}
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
