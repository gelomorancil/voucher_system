import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { Head } from "@inertiajs/react";

const Index = ({ voucher_child, profile, parent }) => {
    return (
        <>
            <div className="print-view">
                {voucher_child.map((child) => {
                    return (
                        <div
                            key={child.id}
                            className="bg-gray-100 border border-gray-300 p-4 h-[2in] w-full "
                        >
                            <p>{child.id}</p>
                            <p>
                                {
                                    child.voucher_parent.voucher_profile
                                        .voucher_description
                                }
                            </p>
                            <p>
                                {
                                    child.voucher_parent.voucher_profile
                                        .voucher_name
                                }
                            </p>
                            {/* <h1>{child.control_no}</h1> */}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Index;
