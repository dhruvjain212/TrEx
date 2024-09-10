// import React from 'react'


// function Insights() {
//   return (
//     <div>Welcome to Insights</div>
//   )
// }

// export default Insights
// App.js
import React from 'react';
import ExpenseChart from './ExpenseChart';
import ExpensePieChart from './ExpensePieChart';

const App = () => {
  return (
    <>
     <h1 className="app-title">Your Income and Expenses</h1>
    <div className="app-container">
    <ExpenseChart />
  </div>
  <div className="app-containerpie">
    <ExpensePieChart />
  </div>
    </>
  );
};

export default App;
