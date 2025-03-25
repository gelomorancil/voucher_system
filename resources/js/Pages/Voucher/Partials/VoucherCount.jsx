import React from "react";
import DonutChart from "./Chart";
import VoucherUpdate from "./VoucherUpdate";

const VoucherCount = ({ total, bought, claimed, not_bought }) => {

    const remaining = total - (bought + claimed);
    const formatNumber = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(num % 1000000 === 0 ? 0 : 1) + "M";
        } else if (num >= 10000) {
            return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "K";
        }
        return new Intl.NumberFormat().format(num);
    };
    return (
        <div className="flex justify-between mb-4 gap-2 w-full">
            <DonutChart
                total={total}
                bought={bought}
                not_bought={not_bought}
                claimed={claimed}
                remaining={remaining}
            />
            <div className="flex flex-col w-7/12 justify-between">
            <VoucherUpdate />
                <div className="flex justify-between gap-2">
                    <div className="w-[300px] h-auto bg-white shadow-sm border-gray-200 border-1 rounded-xl p-4">
                        <div className="text-md uppercase font-bold w-full pb-1 mb-2">
                            Total Quantity
                        </div>
                        <h1 className="font-bold text-6xl text-left">
                            {/* {new Intl.NumberFormat().format(total)} */}
                            {formatNumber(total)}
                            {/* 100000 */}
                        </h1>
                    </div>
                    <div className="w-[300px] h-52 flex flex-col justify-between gap-2">
                        <div className="bg-white shadow-sm border-gray-200 border-1 rounded-xl w-full p-4">
                            <div className="text-md uppercase font-bold w-full pb-1 mb-1">
                                Purchased
                            </div>
                            <h1 className="font-bold text-3xl">
                                {new Intl.NumberFormat().format(bought)}
                            </h1>
                        </div>
                        <div className="bg-white shadow-sm border-gray-200 border-1 rounded-xl w-full p-4">
                            <div className="text-md uppercase font-bold w-full pb-1 mb-1">
                                Unpurchased
                            </div>
                            <h1 className="font-bold text-3xl">
                                {new Intl.NumberFormat().format(not_bought)}
                            </h1>
                        </div>
                    </div>
                    <div className="w-[300px] h-52 flex flex-col justify-between gap-2">
                        <div className="bg-white shadow-sm border-gray-200 border-1 rounded-xl w-full p-4">
                            <div className="text-md uppercase font-bold w-full pb-1 mb-1">
                                Claimed
                            </div>
                            <h1 className="font-bold text-3xl">
                            {new Intl.NumberFormat().format(claimed)}
                            </h1>
                        </div>
                        <div className="bg-white shadow-sm border-gray-200 border-1 rounded-xl w-full p-4">
                            <div className="text-md uppercase font-bold w-full pb-1 mb-1">
                                Remaining
                            </div>
                            <h1 className="font-bold text-3xl">
                                {new Intl.NumberFormat().format(remaining)}
                            </h1>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default VoucherCount;
