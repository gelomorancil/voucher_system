import React from "react";
import Chart from "react-apexcharts";

const DonutChart = ({ total, bought, claimed, not_bought }) => {
    const chartOptions = {
        series: [claimed, bought, not_bought],
        chart: {
            type: "donut",
        },
        colors: ["#DB48FF", "#8146FF", "#579AFF"],
        fill: {
            type: "gradient",
            gradient: {
                shade: "light",
                type: "radial",
                gradientToColors: ["#B621FE", "#5200FF", "#216AFF"],
                stops: [0, 100],
            },
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "65%",
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            offsetY: 20,
                        },
                        total: {
                            showAlways: true,
                            show: true,
                            label: "Total Quantity",
                            formatter: function () {
                                return new Intl.NumberFormat().format(total);
                            },
                        },
                        value: {
                            show: true,
                            fontFamily: "Inter, sans-serif",
                            offsetY: -20,
                            formatter: function (value) {
                                return new Intl.NumberFormat().format(value);
                            },
                        },
                    },
                },
            },
        },
        labels: ["Claimed", "Purchased", "Unpurchased"],
        legend: {
            position: "right",
            labels: {
                useSeriesColors: true,
            },
            floating: false,
            offsetY: 50,
            fontSize: "16px", // Reduce legend font size if needed
            itemMargin: {
                vertical: 10, // Adjust spacing between legend items
            },
        },
    };
    
    return (
        <div className="bg-white shadow-sm border-gray-200 border-1 rounded-xl p-4 w-full flex flex-col items-center">
            <h2 className="text-2xl font-bold uppercase mb-4">Voucher Distribution</h2>
            <Chart options={chartOptions} series={chartOptions.series} type="donut" height={500} width={500}/>
        </div>
    );
};

export default DonutChart;
