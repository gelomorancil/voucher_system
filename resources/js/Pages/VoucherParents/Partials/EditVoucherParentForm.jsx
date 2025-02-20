import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";

const EditVoucherParentForm = ({ voucher_parents, voucher_profiles }) => {

    const { data, setData, patch, processing, errors } = useForm({
        voucher_id: voucher_parents.voucher_id,
        qty: voucher_parents.qty,
    });

    const onSubmit = (e) => {
        e.preventDefault();

        patch(route("parent.update", voucher_parents.id),{
            onSuccess: () => closeModal(),
        });
    };

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <section>
                <button
                    onClick={openModal}
                    className="icons hover:bg-green-200 w-10 h-10 justify-center items-center flex rounded-md text-green-700"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                    </svg>
                </button>
                <Modal show={modalOpen}>
                    <div className="p-4">
                        <h2 className="mx-4 text-lg font-bold text-gray-900">
                            Edit Voucher Parent
                        </h2>
                    </div>
                    <form action="" className="flex flex-col gap-2 p-4" onSubmit={onSubmit}>
                        <div className="errors">
                            <InputError
                                message={errors.voucher_id}
                                className="mt-2"
                            />
                            <InputError message={errors.qty} className="mt-2" />
                        </div>
                        <div className="flex gap-2">
                            <div className="w-11/12">
                                <InputLabel
                                    htmlFor="voucher_id"
                                    value="Voucher Name"
                                />
                                <select
                                    id="voucher_id"
                                    name="voucher_id"
                                    value={data.voucher_id}
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("voucher_id", e.target.value)
                                    }
                                    className="mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 w-full"
                                >
                                    <option hidden>Select Voucher</option>
                                    {voucher_profiles.map((voucher) => (
                                        <option
                                            value={voucher.id}
                                            key={voucher.id}
                                        >
                                            {voucher.voucher_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-2/12">
                                <InputLabel htmlFor="qty" value="qty" />
                                <TextInput
                                    id="qty"
                                    name="qty"
                                    type="number"
                                    value={data.qty}
                                    isFocused={true}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("qty", e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex justify-between gap-2">
                            <PrimaryButton
                                disabled={processing}
                                className="w-full"
                            >
                                Submit
                            </PrimaryButton>
                            <SecondaryButton className="w-full" onClick={closeModal}>
                                Cancel
                            </SecondaryButton>
                        </div>
                    </form>
                </Modal>
            </section>
        </>
    );
};

export default EditVoucherParentForm;
