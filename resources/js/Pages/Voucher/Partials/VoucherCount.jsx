import React from "react";
import DonutChart from "./Chart";

const VoucherCount = ({ total, bought, claimed, not_bought }) => {
    return (
        <div className="flex justify-between gap-6 mb-4">
            <DonutChart total={total} bought={bought} not_bought={not_bought} claimed={claimed}/> 
            <div className="w-[850px] h-40 bg-white shadow-sm border-gray-200 border-1 rounded-xl p-4">
            <div className="text-2xl uppercase font-bold w-full border-b-2 border-gray-200 pb-1 mb-2">Total Quantity</div>
                <h1 className="font-bold text-2xl">{new Intl.NumberFormat().format(total)}</h1>
            </div>
            <div className="w-[850px] h-40 bg-white shadow-sm border-gray-200 border-1 rounded-xl p-4">
            <div className="text-md uppercase font-bold w-full border-b-2 border-gray-200 pb-1 mb-1">Purchased</div>
            <h1 className="font-bold text-xl">{new Intl.NumberFormat().format(bought)}</h1>
            <div className="text-md uppercase font-bold w-full border-b-2 border-gray-200 pb-1 my-1">Unpurchased</div>
            <h1 className="font-bold text-xl">{new Intl.NumberFormat().format(not_bought)}</h1>
            </div>
            <div className="w-[850px] h-40 bg-white shadow-sm border-gray-200 border-1 rounded-xl p-4">
            <div className="text-2xl uppercase font-bold w-full border-b-2 border-gray-200 pb-1 mb-2">Claimed</div>
            <h1 className="font-bold text-2xl">{new Intl.NumberFormat().format(claimed)}</h1>
            </div>
        </div>
    );
};

export default VoucherCount;
