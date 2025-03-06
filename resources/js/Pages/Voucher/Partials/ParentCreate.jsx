    import React, { useState } from "react";
    import PrimaryButton from "@/Components/PrimaryButton";
    import TextInput from "@/Components/TextInput";
    import InputLabel from "@/Components/InputLabel";
    import InputError from "@/Components/InputError";
    // import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
    import { useForm } from "@inertiajs/react";
    import Modal from "@/Components/Modal";
    import SecondaryButton from "@/Components/SecondaryButton";

    const ParentCreate = ({voucher_profiles}) => {
        const [modalOpen, setModalOpen] = useState(false);
        const { data, setData, post, processing, errors, reset } = useForm({
            voucher_id: "",
            qty: "",
        });

        const onSubmit = (e) => {
            e.preventDefault();
            post(route("parent.store"), {
                preserveScroll: true,
                onSuccess: () => closeModal(),
                onFinish: () => reset(),
            });
        };

        const openModal = () => {
            setModalOpen(true);
        };

        const closeModal = () => {
            setModalOpen(false);
        };
        return (
            <>
                <section>
                    {voucher_profiles.length === 0 ? (
                        <PrimaryButton onClick={openModal} className='rounded-md px-4 py-2 my-4' disabled>
                    Generate Voucher
                    </PrimaryButton>
                    ) : (
                        <PrimaryButton onClick={openModal} className='rounded-md px-4 py-2 my-4'>
                    Generate Voucher
                    </PrimaryButton>
                    )}
                    <Modal show={modalOpen} onClose={closeModal}>
                        <div className="p-4">
                            <h2 className="mx-4 text-lg font-bold text-gray-900">
                                Create Voucher
                            </h2>
                            <form
                                action=""
                                className="flex flex-col gap-2 p-4"
                                onSubmit={onSubmit}
                            >
                                <div className="errors">
                                    <InputError
                                        message={errors.voucher_id}
                                        className="mt-2"
                                    />
                                    <InputError
                                        message={errors.qty}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="flex gap-1">
                                    <div className="w-10/12">
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
                                        className="mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 w-full">
                                            <option hidden>Select Voucher</option>
                                            {voucher_profiles.map((voucher) => (
                                                <option value={voucher.id} key={voucher.id}>
                                                {voucher.voucher_name}
                                            </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="w-2/12">
                                        <InputLabel htmlFor="qty" value="Quantity" />
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
                                    <SecondaryButton
                                        onClick={closeModal}
                                        className="w-full"
                                    >
                                        Close
                                    </SecondaryButton>
                                </div>
                            </form>
                        </div>
                    </Modal>
                </section>
            </>
        );
    };

    export default ParentCreate;
