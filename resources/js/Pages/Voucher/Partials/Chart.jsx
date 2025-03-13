import React from "react";
import Chart from "react-apexcharts";

const DonutChart = ({ total, bought, claimed, not_bought, remaining }) => {
    const chartOptions = {
        // series: [claimed, remaining, bought, not_bought, ],
        series: [claimed, remaining, bought, not_bought, ],
        chart: {
            type: "donut",
        },
        colors: ["#DB48FF", "#FF447C", "#579AFF", "#8146FF", ],
        fill: {
            type: "gradient",
            gradient: {
                shade: "light",
                type: "radial",
                gradientToColors: ["#B621FE", "#D71C54", "#216AFF", "#5200FF",  ],
                stops: [0, 100],
            },
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "55%",
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
        labels: ["Claimed","Remaining", "Purchased", "Unpurchased"],
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
        <div className="bg-white shadow-sm border-gray-200 border-1 rounded-xl p-4 w-5/12">
            <h2 className="text-xl bg-gradient-to-r from-[#8146FF] to-[#DB48FF] text-transparent bg-clip-text mb-4 uppercase text-center">Voucher Distribution</h2>
            <Chart options={chartOptions} series={chartOptions.series} type="donut" height={400} width={425}/>
        </div>
    );
};

export default DonutChart;
