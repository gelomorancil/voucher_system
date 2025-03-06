import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import React,{ useState } from "react";
import SecondaryButton from "@/Components/SecondaryButton";
import TextArea from '@/Components/TextArea';
import Modal from "@/Components/Modal";


const ProfileEdit = ({voucher_profile, success, error }) => {
    const { data, setData, patch, processing, errors } = useForm({
        voucher_name: voucher_profile.voucher_name,
        voucher_description: voucher_profile.voucher_description,
    });
    const onSubmit = (e) => {
        e.preventDefault();

        patch(route("voucher.update", voucher_profile.id),{
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
                <Modal show={modalOpen} onClose={closeModal}>
                    <div className="p-4">
                        <h2 className="mx-4 text-lg font-bold text-gray-900">
                            Edit Voucher Profile
                        </h2>
                        <form
                            action=""
                            className="flex flex-col gap-2 p-4"
                            onSubmit={onSubmit}
                        >
                            <div className="errors">
                                <InputError
                                    message={errors.voucher_name}
                                    className="mt-2"
                                />
                                <InputError
                                    message={errors.voucher_description}
                                    className="mt-2"
                                />
                            </div>

                            <InputLabel
                                htmlFor="voucher_name"
                                value="Voucher Name"
                            />
                            <TextInput
                                id="voucher_name"
                                name="voucher_name"
                                value={data.voucher_name}
                                isFocused={true}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("voucher_name", e.target.value)
                                }
                            />

                            <InputLabel
                                htmlFor="voucher_description"
                                value="Voucher Description"
                            />
                            <TextArea
                                id="voucher_description"
                                name="voucher_description"
                                value={data.voucher_description}
                                isFocused={true}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData(
                                        "voucher_description",
                                        e.target.value
                                    )
                                }
                            />

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

export default ProfileEdit;

