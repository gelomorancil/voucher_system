import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect } from "react";
import { Head } from "@inertiajs/react";

const Index = ({ child}) => {
    console.log(child)
    return (
        <>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Dashboard/Parent/Child/List
                    </h2>
                }
            >
            <Head title="Dashboard" />
            <div className="py-12 px-60">
                <div className="w-full shadow-md bg-white">
                <table className="min-w-full table-fixed border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-4 py-2">ID</th>
                            <th className="border px-4 py-2">Voucher Name</th>
                            <th className="border px-4 py-2">Description</th>
                            <th className="border px-4 py-2">Control No</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {child.data.map((child) => (
                            <tr key={child.id} className="border">
                                <td className="border px-4 py-2 text-center">
                                    {child.id}
                                </td>
                                <td className="border px-4 py-2">
                                    {
                                        child.voucher_parent.voucher_profile
                                            .voucher_name
                                    }
                                </td>
                                <td className="border px-4 py-2">
                                    {
                                        child.voucher_parent.voucher_profile
                                            .voucher_description
                                    }
                                </td>
                                <td className="border px-4 py-2">
                                {child.control_no}
                                </td>
                                <td className="border px-4 py-2 libre-barcode-128-regular text-center">
                                    {child.control_no}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
