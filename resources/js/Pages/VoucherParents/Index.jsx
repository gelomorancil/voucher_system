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
                                                <td className="py-2 hover:cursor-pointer">
                                                    <div className="flex">
                                                        {/* FOR EDIT */}
                                                        <Link href={route('child.show',parent.id)} className="p-4 bg-yellow-50">Print</Link>
                                                        
                                                        <EditVoucherParentForm voucher_parents={parent} voucher_profiles={all_voucher_profiles}/>

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
                <div className="px-60">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="bg-white shadow-sm sm:rounded-lg p-4">
                            <h1>New Parent Voucher Form</h1>
                            <div className="flex gap-2">
                                {" "}
                                {/* Set gap to 8 for more spacing between form and table */}
                                {/* Form Section */}
                                <form
                                    action=""
                                    className="w-1/3 bg-yellow-200 p-4"
                                >
                                    {" "}
                                    {/* Reduced width of form */}
                                    <InputLabel
                                        htmlFor="voucher_description"
                                        value="Voucher Description"
                                    />
                                    <TextInput
                                        id="voucher_description"
                                        name="voucher_description"
                                        // value={data.voucher_description}
                                        isFocused={true}
                                        className="mt-1 block w-full"
                                        // onChange={(e) =>
                                        //     setData(
                                        //         "voucher_description",
                                        //         e.target.value
                                        //     )
                                        // }
                                    />
                                </form>
                                {/* Table Section */}
                                <div className="w-2/3 bg-green-200">
                                    {" "}
                                    {/* Increased width for table */}
                                    <table className="w-full table-auto border-collapse">
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
                                                        {parent.id}
                                                    </td>
                                                    <td className="px-4 py-2">
                                                        {parent.qty}
                                                    </td>
                                                    <td className="py-2 hover:cursor-pointer">
                                                        <div className="flex">
                                                            {/* DELETE BUTTON */}
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
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
