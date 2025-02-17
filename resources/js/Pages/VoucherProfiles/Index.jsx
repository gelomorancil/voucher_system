import React from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from '@inertiajs/react';

const Index = ({all_voucher_profiles }) => {
  return (
    <>
    <AuthenticatedLayout
    header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Dashboard/Voucher/List
        </h2>
    }>
        <Head title="Dashboard"/>
        <div className="py-12">
            TESTING NEW INDEX
          {all_voucher_profiles.map((voucher)=>(
            < div key={voucher.id}>
            <p>{voucher.voucher_name}</p>
            <p>{voucher.id}</p>
            <p>{voucher.voucher_description}</p></div>
          ))}
        </div>
    </AuthenticatedLayout>
    </>
  )
}

export default Index