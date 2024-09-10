// components/ExpenseChart.js
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the Pie chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ userId }) => {
  const [totalAmountData, setTotalAmountData] = useState({ positive: 0, negative: 0 });

  useEffect(() => {
    const fetchExpenseData = async () => {
        try {
          const url = `http://localhost:8000/insights`;
          const headers = {
              headers: {
                  'Authorization': localStorage.getItem('token')
              }
          }
          const response = await fetch(url, headers);
        //  console.log(response)
        const result = await response.json();
        const expenses = result.data;  // Access the "data" array in the response
        console.log(expenses)
  
        if (!Array.isArray(expenses)) {
          throw new Error('Expenses should be an array');
        }

        // Calculate total positive and negative amounts
        const positiveAmount = expenses
          .filter(exp => exp.amount > 0)
          .reduce((sum, exp) => sum + exp.amount, 0);

        const negativeAmount = expenses
          .filter(exp => exp.amount < 0)
          .reduce((sum, exp) => sum + exp.amount, 0);

        // Update the state with calculated totals
        setTotalAmountData({
          positive: positiveAmount,
          negative: negativeAmount,
        });
      } catch (error) {
        console.error('Error fetching expense data:', error);
      }
    };

    fetchExpenseData();
  }, [userId]);

  // Pie chart data configuration
  const chartData = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        data: [totalAmountData.positive, Math.abs(totalAmountData.negative)],  // Positive and absolute negative amounts
        backgroundColor: ['#4CAF50', '#FF5252'],  // Green for positive, red for negative
        hoverBackgroundColor: ['#66BB6A', '#FF7043'],
      },
    ],
  };


  const chartOptions = {
    maintainAspectRatio: false,  // Allow the chart to override the default aspect ratio
  };

  return (
   <div>
      <h2>Income VS Expense</h2>
      <div style={{ position: 'relative', width: '250px', height: '250px' }}>
        <Pie data={chartData} options={chartOptions} width={250} height={250} />
      </div>
    </div>
  );
};

export default ExpenseChart;
