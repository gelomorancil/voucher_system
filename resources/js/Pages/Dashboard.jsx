import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                        {/* <button className='bg-purple-100 p-2'>CLICK ME!</button> */}
                        <Link href={route('voucher.create')} className='bg-purple-100 p-2'>Redirect Here</Link>
                        <Link href={route('voucher.index')} className='bg-purple-100 p-2'>Voucher List</Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
