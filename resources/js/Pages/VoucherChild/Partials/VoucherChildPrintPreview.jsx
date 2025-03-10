import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect } from "react";
import { Head } from "@inertiajs/react";

const VoucherChildPrintPreview = ({ voucher_child }) => {

    useEffect(() => {
        const handlePrintClose = () => {
            window.close();
        };

        window.print();
        window.addEventListener("afterprint", handlePrintClose);

        return () => {
            window.removeEventListener("afterprint", handlePrintClose);
        };
    }, []);
    return (
        <>
            <div className="print-view">
                {voucher_child.map((child) => {
                    return (
                        <div
                            key={child.id}
                            className="border border-gray-300 p-2 h-[2in] w-[3in] bg-yellow-300"
                        >
                             {/* <img src={`http://127.0.0.1:8000/storage/uploads/${child.voucher_parent.voucher_profile.image_name}`} alt="Voucher Image" className="h-20 w-20 object-cover"/> */}
                             <img src={`/storage/uploads/${child.voucher_parent.voucher_profile.image_name}`} alt="Voucher Image" className="h-20 w-20 object-cover" />
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
                            <div className="libre-barcode-128-regular">
                                {
                                    child.control_no
                                }
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default VoucherChildPrintPreview;
