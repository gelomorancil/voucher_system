import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";

const ProfileDelete = ({ id }) => {
  const {delete: destroy, processing, reset} = useForm();
  const deleteData = (id) => {
    destroy(route('voucher.destroy',id), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onFinish: () => reset(),
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
        <section>
            <button
                type="button"
                onClick={openModal}
                id="delete"
                name="delete"
                className="icons hover:bg-red-200 w-10 h-10 justify-center items-center flex rounded-md text-red-500"
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
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                </svg>
            </button>
            <Modal show={modalOpen} onClose={closeModal}>
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Are you sure you want to delete your voucher profile?
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">
                    Once your data is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </p>
                    <div className="flex justify-end gap-2 mt-6">
                    <DangerButton
                        disabled={processing}
                        onClick={() => deleteData(id)}
                    >
                        Delete
                    </DangerButton>
                    <SecondaryButton onClick={closeModal}>
                        Cancel
                    </SecondaryButton>
                    </div>
                </div>
            </Modal>
        </section>
    );
};

export default ProfileDelete;
