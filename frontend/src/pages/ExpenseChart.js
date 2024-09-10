// components/ExpenseChart.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

//Registering the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const ExpenseChart = () => {
  const [expenseData, setExpenseData] = useState({ categories: [], amounts: [] });

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



        // Process the expenses to extract categories and amounts
        const categories = [...new Set(expenses.map(exp => exp.text))];  // Get unique categories (texts)
        const amounts = categories.map(category =>
          expenses
            .filter(exp => exp.text === category)
            .reduce((sum, exp) => sum + exp.amount, 0)  // Sum up amounts per category
        );

        setExpenseData({ categories, amounts });
      } catch (error) {
        console.error('Error fetching expense data:', error);
      }
    };

    fetchExpenseData();
  }, []);

  // Chart data configuration
  const getBackgroundColor = (amount) => {
    return amount < 0 ? 'rgba(255, 99, 132, 0.2)' : 'rgba(75, 192, 192, 0.2)';
  };

  // Function to determine border color based on the amount
  const getBorderColor = (amount) => {
    return amount < 0 ? 'rgba(255, 99, 132, 1)' : 'rgba(75, 192, 192, 1)';
  };


  const chartData = {
    labels: expenseData.categories,
    datasets: [
      {
        label: 'Spending by Category',
        data: expenseData.amounts,
        // backgroundColor: 'rgba(75, 192, 192, 0.2)',
        // borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: expenseData.amounts.map(getBackgroundColor),
        borderColor: expenseData.amounts.map(getBorderColor),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Expense Category Chart</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default ExpenseChart;
