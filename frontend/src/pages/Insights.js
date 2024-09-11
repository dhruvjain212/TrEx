// import React from 'react'


// function Insights() {
//   return (
//     <div>Welcome to Insights</div>
//   )
// }

// export default Insights
// App.js
import React, { useEffect, useState }from 'react';
import ExpenseChart from './ExpenseChart';
import ExpensePieChart from './ExpensePieChart';
import Tip from './Tip';

import { useNavigate } from 'react-router-dom';
import {  handleError, handleSuccess } from '../utils';

const App = () => {

  const [loggedInUser, setLoggedInUser] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [incomeAmt, setIncomeAmt] = useState(0);
  const [expenseAmt, setExpenseAmt] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const amounts = expenses.map(item => item.amount);
    const income = amounts.filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0);
    const exp = amounts.filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1;
    setIncomeAmt(income);
    setExpenseAmt(exp);
}, [expenses])

const fetchExpenses = async () => {
  try {
      const url = `http://localhost:8000/expenses`;
      const headers = {
          headers: {
              'Authorization': localStorage.getItem('token')
          }
      }
      const response = await fetch(url, headers);
      //console.log(response)
      if (response.status === 403) {
          localStorage.removeItem('token');
          navigate('/login');
          return
      }
      const result = await response.json();
      console.log('--result', result.data);
      setExpenses(result.data);
  } catch (err) {
      handleError(err);
  }
}

useEffect(() => {
  fetchExpenses()
}, [])


  return (
    <>
     <h1 className="app-title">Your Income and Expenses</h1>
    <div className="app-container">
    <ExpenseChart />
  </div>
  <div className="app-containerpie">
    <ExpensePieChart />
  </div>
  <div className="app-container-tip">
    <Tip  incomeAmt={incomeAmt}
                expenseAmt={expenseAmt} expenses={expenses}/>
  </div>
    </>
  );
};

export default App;
