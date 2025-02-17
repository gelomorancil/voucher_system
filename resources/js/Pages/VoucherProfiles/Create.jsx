// import React from 'react'
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from '@inertiajs/react';

const Create = () => {
    const {data, setData, post, processing, errors, reset} =useForm({
        voucher_name:'',
        voucher_description:'',
    })

    const onSubmit = (e) =>{
        e.preventDefault();
        
        post(route('voucher.store'));

        // ,{
        //     onFinish: () => reset(setData)
        // });

    }
    return (
        <>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Dashboard/Voucher/Create
                    </h2>
                }
            >
                <Head title="Dashboard" />

                <div className="py-12">
                    <h1>This is the create page of voucher profiles ackkk</h1>
                    <form action="" className="flex flex-col gap-2 p-4" onSubmit={onSubmit}>
                        {/* <label htmlFor="">Voucher Name</label> */}
                        <InputLabel htmlFor="voucher_name" value="Voucher Name" />
                        <TextInput 
                        id='voucher_name'
                        name="voucher_name"
                        value={data.voucher_name}
                        isFocused={true}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('voucher_name', e.target.value)}
                        />
                        <InputError message={errors.voucher_name} className="mt-2" />
                        {/*  VOUCHER DESCRIPTION*/}
                        <InputLabel htmlFor="voucher_description" value="Voucher Description" />
                        <TextInput 
                        id='voucher_description'
                        name="voucher_description"
                        value={data.voucher_description}
                        isFocused={true}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('voucher_description', e.target.value)}
                        />
                        <InputError message={errors.voucher_description} className="mt-2" />
                        {/* <label htmlFor="">Voucher Description</label>
                        <input type="text" name="voucher_description" /> */}
                        {/* <button type="submit">Create</button> */}
                        <PrimaryButton className="mt-1 block w-full" disabled={processing}>
                            Submit
                        </PrimaryButton>
                    </form>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Create;
