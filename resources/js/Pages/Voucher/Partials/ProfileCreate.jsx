import React,{useState} from 'react'
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputFile from "@/Components/InputFile";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextArea from '@/Components/TextArea';

const ProfileCreate = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        voucher_name: "",
        voucher_description: "",
        image_name: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('voucher_name', data.voucher_name);
        formData.append('voucher_description', data.voucher_description);
        if (data.image_name) {
            formData.append('image_name', data.image_name)
        }

        post(route("voucher.store"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
            data: formData, // Pass FormData to Inertia
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
                <SecondaryButton onClick={openModal} className='rounded-md px-4 py-2 my-4'>
                            Create Voucher Profile
                </SecondaryButton>
                <Modal show={modalOpen} onClose={closeModal}>
                    <div className="p-4">
                    <h2 className="mx-4 text-lg font-bold text-gray-900">
                        Create Voucher Details
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
                        {/* <label htmlFor="">Voucher Name</label> */}
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
                        
                        {/*  VOUCHER DESCRIPTION*/}
                        <InputLabel
                            htmlFor="voucher_description"
                            value="Voucher Description"
                        />
                        <TextArea
                            id="voucher_description"
                            name="voucher_description"
                            value={data.voucher_description}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("voucher_description", e.target.value)
                            }
                        />
                        <InputLabel htmlFor="image_name" value="Voucher Image" />
                            <InputFile
                                id="image_name"
                                name="image_name"
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("image_name", e.target.files[0])
                                }
                            />

                        
                        <div className="flex justify-between gap-2">
                        <PrimaryButton disabled={processing} className='w-full'>
                            Submit
                        </PrimaryButton>
                        <SecondaryButton onClick={closeModal}className='w-full'>
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

export default ProfileCreate;
