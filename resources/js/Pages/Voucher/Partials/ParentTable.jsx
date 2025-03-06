import React from "react";

const ParentTable = ({ parent }) => {
    return (
        <div className="w-full">
            <table className="min-w-full table-fixed border-collapse rounded-lg min-h-[60dvh]">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="px-4 py-2 border">ID</th>
                        <th className="px-4 py-2 border">Voucher Name</th>
                        <th className="px-4 py-2 border">Quantity</th>
                        <th className="px-4 py-2 border">Bought</th>
                        <th className="px-4 py-2 border">Claimed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {parent.length === 0 ? (
                        <tr>
                            <td
                                colSpan="6"
                                className="text-center py-4 text-gray-500"
                            >
                                No Voucher Generated.
                            </td>
                        </tr>
                    ) : (
                        parent.map((parent) => (
                            <tr key={parent.id} className="border-t">
                                <td className="px-4 py-2">{parent.id}</td>
                                <td className="px-4 py-2">
                                    {parent.voucher_profile.voucher_name}
                                </td>
                                <td className="px-4 py-2">
                                    {new Intl.NumberFormat().format(parent.qty)}
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
                                                        "voucher.show",
                                                        parent.id
                                                    ),
                                                    "_blank"
                                                )
                                            }
                                            className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                                        >
                                            Print
                                        </button>

                                        {/* <EditVoucherParentForm
                                                            parent={parent}
                                                            voucher_profiles={
                                                                profile
                                                            }
                                                        /> */}

                                        {/* DELETE BUTTON SHEESHKEBABERS */}
                                        {/* <DeleteVoucherProfileForm id={voucher.id}/> */}
                                        <ParentDelete id={parent.id} />
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ParentTable;
