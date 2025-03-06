import React from "react";

const ProfileTable = ({profile}) => {
    return (
        <div className="w-full  ">
            <table className="min-w-full table-fixed border-collapse rounded-lg min-h-[60dvh]">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="px-4 py-2 border">ID</th>
                        <th className="px-4 py-2 border">Image</th>
                        <th className="px-4 py-2 border">Voucher Name</th>
                        <th className="px-4 py-2 border">Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {profile.length === 0 ? (
                        <tr>
                            <td
                                colSpan="5"
                                className="text-center py-4 text-gray-500"
                            >
                                No Voucher Profiles yet.
                            </td>
                        </tr>
                    ) : (
                        profile.map((voucher) => (
                            <tr key={voucher.id} className="border-t">
                                <td className="px-4 py-2">{voucher.id}</td>
                                <td className="px-4 py-2">
                                    <img
                                        src={`/storage/uploads/${voucher.image_name}`}
                                        alt="Voucher Image"
                                        className="h-20 w-20 object-cover"
                                    />
                                </td>
                                <td className="px-4 py-2">
                                    {voucher.voucher_name}
                                </td>
                                <td className="px-4 py-2">
                                    {voucher.voucher_description}
                                </td>
                                <td className="py-2 hover:cursor-pointer">
                                    <div className="flex">
                                        {/* FOR EDIT */}
                                        <ProfileEdit
                                            voucher_profile={voucher}
                                        />

                                        {/* DELETE BUTTON */}
                                        <ProfileDelete id={voucher.id} />
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

export default ProfileTable;
