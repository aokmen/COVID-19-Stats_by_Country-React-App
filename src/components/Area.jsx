import React from "react";
import ReactApexChart from 'react-apexcharts';
const Area = ({ datax }) => {
  const chartData = {

  

          
    series: [datax.deaths, datax.active],
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
      },
      // colors: ['#c47c00', '#c55b67', '#20abf8', '#11abc9'],
      labels: ['Deaths', 'Active'],
      legend: {
        labels: {
                   useSeriesColors: true,
           },
        formatter: function(seriesName, opts) {
          return seriesName + " - " + opts.w.globals.series[opts.seriesIndex]
        }
      },
      title: {
        text: 'Covid Status',
        style: {
          color: '#fff' // Başlık metni rengini beyaz yapıyoruz
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
       
  
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  
  };

  
  return (
    <div>
      <ReactApexChart options={chartData.options} series={chartData.series} type="donut" width={280} />
    </div>
  );
};

export default Area;