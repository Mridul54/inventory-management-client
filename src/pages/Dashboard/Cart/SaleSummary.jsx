import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { Helmet } from 'react-helmet';

const SaleSummary = () => {
  const [chart, setChart] = useState(null);
  const [chartData, setChartData] = useState({
    labels: ['Total Sale', 'Total Invest', 'Total Profit'],
    datasets: [
      {
        data: [100, 40, 60], // Static values for demonstration
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  });

  useEffect(() => {
    if (chart) {
      chart.destroy();
    }

    const newChart = new Chart(document.getElementById('myChart'), {
      type: 'pie',
      data: chartData,
    });

    setChart(newChart);

    return () => {
      newChart.destroy();
    };
  }, [chartData]);

  return (
    <>
    <Helmet>
                <title>Inventory | Sales Summary</title>
            </Helmet>
    <div className='w-80 m-auto'>
      <h2 className='text-4xl text-center font-bold mb-7'>Sale Count</h2>
      <canvas id="myChart" width="300" height="300"></canvas>
    </div>
    </>
  );
};

export default SaleSummary;
