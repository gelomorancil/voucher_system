import React from "react";
import Chart from "react-apexcharts";

const DonutChart = ({ total, bought, claimed, not_bought }) => {
    const chartOptions = {
        series: [claimed, bought, not_bought],
        colors: ["#DB48FF", "#8146FF", "#579AFF"], 
        chart: {
            type: "donut",
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "50%",
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontFamily: "Inter, sans-serif",
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
        labels: ["Claimed", "Bought", "Unbought"],
        legend: {
            position: "right", // Moves the legend to the left
            fontFamily: "Inter, sans-serif",
            labels: {
              useSeriesColors: true,
            }
          },
    };

    return (
        <div className="bg-white shadow-sm border-gray-200 border-1 rounded-xl p-4 w-full flex flex-col items-center">
            <h2 className="text-2xl font-bold uppercase mb-4">Voucher Distribution</h2>
            <Chart options={chartOptions} series={chartOptions.series} type="donut" height={320} />
        </div>
    );
};

export default DonutChart;
