import React from "react";
import Chart from "react-apexcharts";

const Line = ({ datas }) => {
  console.log(datas);
  const chartData2 = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Cases Per One Million"],
        labels: {
          style: {
            colors: "#fff",
          },
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "80px",
        },
      },
      legend: {
        labels: {
            colors: ["#a0abf8", "#d0abf8", "#20abf8"], // Set the color of the legend labels to white
        },
      },
    },
    colors: ["#c47c00", "#c55b67", "#20abf8"],
    series: [
      {
        name: "Cases Per One Million",
        data: [datas.casesPerOneMillion],
        color: "#a0abf8",
      },
      {
        name: "Recovered Per One Million",
        data: [datas.recoveredPerOneMillion],
        color: "#d0abf8",
      },
      {
        name: "Deaths Per One Million",
        data: [datas.deathsPerOneMillion],
        color: "#20abf8",
      },
    ],
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chartData2.options}
            series={chartData2.series}
            type="bar"
            width={300}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Line;
