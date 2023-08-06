import React from 'react';
import Chart from 'react-apexcharts';

const Bar = ({ datam }) => {
  const barData = {
    options: {
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      xaxis: {
        categories: ['Per'],
        labels: {
          style: {
            colors: ['#fff'], // Set the color of the x-axis labels to white
          },
        },
      },
      legend: {
        labels: {
          colors: ['#c55b67', '#11abc9', '#a0abf8', '#c47c00'],
        },
      },
    },
    series: [
      {
        name: 'One Case Per People',
        data: [datam.oneCasePerPeople],
        color: '#c55b67',
      },

      {
        name: 'Active Per One Million',
        data: [datam.activePerOneMillion],
        color: '#11abc9',
      },

      {
        name: 'Deaths Per One Million',
        data: [datam.deathsPerOneMillion],
        color: '#a0abf8',
      },
      {
        name: 'Tests Per One Million',
        data: [datam.oneTestPerPeople],
        color: '#c47c00',
      },
    ],
  };

  return (
    <div className="bar">
      <Chart options={barData.options} series={barData.series} type="bar" width="400" />
    </div>
  );
};

export default Bar;
