import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect } from "react";
import { Head } from "@inertiajs/react";
import Barcode from "react-barcode";


const PrintPreview = ({ voucher_child }) => {
    // useEffect(() => {
    //     const handlePrintClose = () => {
    //         window.close(); // Closes the tab only after printing or canceling
    //     };

    //     window.print(); // Opens the print dialog
    //     window.addEventListener("afterprint", handlePrintClose);

    //     return () => {
    //         window.removeEventListener("afterprint", handlePrintClose);
    //     };
    // }, []);
    return (
        <>
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100" id="show-design">

            <h1 className="text-2xl uppercase text-bold">Example Voucher</h1>
        {voucher_child.slice(0,1).map((child) => {
        return (
            <div className="space-y-6" key={child.id}>
                <div id="couponTemplate">
                    <div className="flex w-[4in] h-[2in] bg-gradient-to-r from-blue-500 to-blue-300 text-white rounded-lg border-2">
                        <div className="p-4 flex-1 w-10/12">
                        {/* <div className="p-4 flex-1 w-10/12" style={{ backgroundImage: `url('/storage/uploads/${child.voucher_parent.voucher_profile.image_name}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} > */}
                            <p className="text-xl font-bold uppercase rotate-[-3deg] mb-4 break-words">
                                {child.voucher_parent.voucher_profile.voucher_name}
                            </p>
                            <p className="text-mdmax-w-[2in] break-words">
                                {child.voucher_parent.voucher_profile.voucher_description}
                            </p>
                            <img src={`/uploads/images/${child.voucher_parent.voucher_profile.image_name}`} alt="Voucher Image" className="h-12 w-12 object-cover mt-12" />
                        </div>
                        <div className="bg-white w-2/12 text-gray-700 flex flex-col items-center justify-center text-[10px] text-center font-semibold">
                        <div className="rotate-[270deg] origin-center leading-none">
                        {/* <span className="libre-barcode-128-regular">{child.control_no}</span> */}
                        <span><Barcode value={child.control_no} format="CODE128" /></span>
                        {/* <p className="leading-none text-[15px]">{child.control_no}</p> */}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    })}
        </div>
            {/* <h1>Print Preview Page New </h1> */}
            <div className="print-view grid grid-cols-2 p-6">
    {voucher_child.map((child) => {
        return (
            <div className="space-y-6" key={child.id}>
                <div id="couponTemplate">
                    <div className="flex w-[4in] h-[2in] bg-gradient-to-r from-blue-500 to-blue-300 text-white rounded-lg outline-2 border border-gray-400 overflow-hidden mb-1 mr-1">
                        <div className="p-4 flex-1 w-9/12">
                        {/* <div className="p-4 flex-1 w-10/12" style={{ backgroundImage: `url('/storage/uploads/${child.voucher_parent.voucher_profile.image_name}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} > */}
                            <p className="text-xl font-bold uppercase rotate-[-3deg] mb-4 break-words">
                                {child.voucher_parent.voucher_profile.voucher_name}
                            </p>
                            <p className="text-mdmax-w-[2in] break-words">
                                {child.voucher_parent.voucher_profile.voucher_description}
                            </p>
                            <img src={`/uploads/images/${child.voucher_parent.voucher_profile.image_name}`} alt="Voucher Image" className="h-12 w-12 object-cover mt-12" />
                        </div>
                        <div className="bg-white w-3/12 text-gray-700 flex flex-col items-center justify-center text-[10px] text-center font-semibold">
                        <div className="rotate-[270deg] overflow-hidden">
                        {/* <span className="libre-barcode-128-regular leading-none scale-200">{child.control_no}</span> */}
                        <Barcode value={child.control_no} format="CODE128" height={65} width={2}/>
                        {/* <p className="leading-none text-[15px]">{child.control_no}</p> */}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    })}
</div>

        </>
    );
};

export default PrintPreview;
