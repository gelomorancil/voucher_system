import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import React from "react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

const VoucherUpdate = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        control_no: "",
    });

    const handleBuy = (e) => {
        e.preventDefault();
        post(route("child.updateBuy"), {
            preserveScroll: true,
            onFinish: () => reset(),
        });
    };

    const handleClaim = (e) => {
        e.preventDefault();
        post(route("child.updateClaim"), {
            preserveScroll: true,
            onFinish: () => reset(),
        });
    };

    return (
        <>
       
        <div className="gap-4 bg-white p-4 py-6 rounded-lg shadow-sm">
            {/* <form action="" className="flex gap-2 w-full"> */}
            <InputError message={errors.control_no} className="mt-2" />
            <div className="flex justify-between items-center gap-2">
            <div className="w-full">
                
                <label htmlFor="">Control Number</label>
                <TextInput
                    id="qty"
                    name="control_no"
                    type="text"
                    value={data.control_no}
                    isFocused={true}
                    className="h-12 mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    onChange={(e) => setData("control_no", e.target.value)}
                />
            </div>
            <div className="flex gap-2">
                <PrimaryButton onClick={handleBuy} className="px-4 py-2 h-12 mt-6">Bought</PrimaryButton>
                <SecondaryButton onClick={handleClaim} className="px-4 py-2 h-12 mt-6">Claim</SecondaryButton>
            </div>
            </div>
            {/* </form> */}
        </div>
        </>
    );
};

export default VoucherUpdate;
