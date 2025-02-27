import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Create from "../VoucherParents/Create";
import DeleteVoucherParentForm from "./Partials/DeleteVoucherParentForm";
import EditVoucherParentForm from "./Partials/EditVoucherParentForm";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import DisplayTotalCount from "./Partials/DisplayTotalCount";
import UpdateChildStatus from "./Partials/UpdateChildStatus";

const Index = ({
    all_voucher_profiles,
    voucher_parents,
    success,
    error,
    total,
    bought,
    claimed,
    not_bought,
}) => {
    const [isVisibleSuccess, setIsVisibleSuccess] = useState(true);
    const [isVisibleError, setIsVisibleError] = useState(true);

    const handleCloseSuccess = () => {
        setIsVisibleSuccess(false);
    };

    const handleCloseError = () => {
        setIsVisibleError(false);
    };

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
                    {/* NOTIFICATION TOAST */}
                    <div className="fixed top-4 right-4 z-50 flex flex-col gap-4">
                        {success && isVisibleSuccess && (
                            <div className="bg-green-500 text-white px-6 py-3 rounded-md shadow-lg opacity-100 animate-toastIn flex items-center justify-between">
                                <span>{success}</span>
                                <button
                                    onClick={handleCloseSuccess}
                                    className="text-white ml-4 hover:text-gray-200"
                                >
                                    &times;
                                </button>
                            </div>
                        )}
                        {error && isVisibleError && (
                            <div className="bg-red-500 text-white px-6 py-3 rounded-md shadow-lg opacity-100 animate-toastIn flex items-center justify-between">
                                <span>{error}</span>
                                <button
                                    onClick={handleCloseError}
                                    className="text-white ml-4 hover:text-gray-200"
                                >
                                    &times;
                                </button>
                            </div>
                        )}
                    </div>
                    {/* END OF NOTIFICATION TOAST */}
                    <DisplayTotalCount
                        total={total}
                        bought={bought}
                        claimed={claimed}
                        not_bought={not_bought}
                    />
                    <UpdateChildStatus />

                    <div className="bg-white shadow-sm sm:rounded-lg p-4">
                        {/* <Create /> */}
                        <Create voucher_profiles={all_voucher_profiles} />
                        {/* <button>Create Parent</button> */}
                        <div className="w-full shadow-md">
                            <table className="min-w-full table-fixed border-collapse">
                                <thead>
                                    <tr className="bg-gray-200 text-left">
                                        <th className="px-4 py-2 border">ID</th>
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
                                                {new Intl.NumberFormat().format(
                                                    parent.qty
                                                )}
                                            </td>
                                            <td className="px-4 py-2">
                                                {new Intl.NumberFormat().format(
                                                    parent.buy_count
                                                )}
                                            </td>
                                            <td className="px-4 py-2">
                                                {new Intl.NumberFormat().format(
                                                    parent.claimed_count
                                                )}
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
                                                        voucher_parents={parent}
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
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
