import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ParentCreate from "./Partials/ParentCreate";
import ProfileCreate from "./Partials/ProfileCreate";
import ParentDelete from "./Partials/ParentDelete";
// import EditVoucherParentForm from "./Partials/EditVoucherParentForm";
import ProfileEdit from "./Partials/ProfileEdit";
import ProfileDelete from "./Partials/ProfileDelete";
// import TextInput from "@/Components/TextInput";
// import InputLabel from "@/Components/InputLabel";
import VoucherCount from "./Partials/VoucherCount";
import VoucherUpdate from "./Partials/VoucherUpdate";
import ParentTable from "./Partials/ParentTable";
import ProfileTable from "./Partials/ProfileTable";

const Index = ({profile, parent, success, error, total, bought, claimed, not_bought}) => {
    const [activeTab, setActiveTab] = useState("voucher")
    const [isVisibleSuccess, setIsVisibleSuccess] = useState(true);
    const [isVisibleError, setIsVisibleError] = useState(true);

    const handleCloseSuccess = () => {
        setIsVisibleSuccess(false);
    };

    const handleCloseError = () => {
        setIsVisibleError(false);
    };

    return (
        <>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Dashboard/Parent/Voucher/List
                    </h2>
                }
            >
                <Head title="Dashboard" />
                <div className="py-12 px-60">
                    {/* NOTIFICATION TOAST */}
                    <div className="fixed top-4 right-4 z-50 flex flex-col gap-4 ">
                        {success && isVisibleSuccess && (
                            <div className="bg-green-500 text-white px-6 py-3 rounded-md shadow-lg opacity-100 animate-toastIn flex items-center justify-between max-w-96">
                                <span>{success}</span>
                                <button
                                    onClick={handleCloseSuccess}
                                    className="text-white ml-4 hover:text-gray-200"
                                >
                                    &times;
                                </button>
                            </div>
                        )}
                        {error && isVisibleError && (
                            <div className="bg-red-500 text-white px-6 py-3 rounded-md shadow-lg opacity-100 animate-toastIn flex items-center justify-between max-w-96">
                                <span>{error}</span>
                                <button
                                    onClick={handleCloseError}
                                    className="text-white ml-4 hover:text-gray-200"
                                >
                                    &times;
                                </button>
                            </div>
                        )}
                    </div>
                    {/* END OF NOTIFICATION TOAST */}
                    <VoucherCount total={total} bought={bought} claimed={claimed} not_bought={not_bought} />
                    <VoucherUpdate />
                    <div className="bg-white shadow-sm sm:rounded-lg p-4">
                        <div className="flex gap-2">
                            <ParentCreate voucher_profiles={profile} />
                            <ProfileCreate />
                        </div>
                        <div className="bg-white shadow-sm sm:rounded-lg p-4">
                    {/* Tabs Navigation */}
                    <div className="flex border-b">
                        <button
                            className={`px-4 py-2 font-medium ${
                                activeTab === "voucher" ? "border-b-2 border-indigo-800 text-indigo-800" : "text-gray-600"
                            }`}
                            onClick={() => setActiveTab("voucher")}
                        >
                            Voucher
                        </button>
                        <button
                            className={`px-4 py-2 font-medium ${
                                activeTab === "details" ? "border-b-2 border-indigo-800 text-indigo-800" : "text-gray-600"
                            }`}
                            onClick={() => setActiveTab("details")}
                        >
                            Details
                        </button>
                    </div>

                    {/* Tabs Content */}
                    <div className="mt-4">
                        {activeTab === "voucher" ? (
                            <ParentTable parent={parent} />
                        ) : (
                            <ProfileTable profile={profile} />
                        )}
                    </div>
                    </div>
                        
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
