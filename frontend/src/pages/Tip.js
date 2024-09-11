import React from 'react'

function Tip({ incomeAmt, expenseAmt, expenses }) {

    function getHighValueExpenses(expenses) {
        const filteredExpenses = expenses.filter(expenses => expenses.amount < -(incomeAmt * 0.1));
        return filteredExpenses.map(expenses => expenses.text);
      }
  
      const highValueExpenseTexts = getHighValueExpenses(expenses);

    return (
        <div>

             {/* Show Income & Expense amount */}
             <div className="amounts-container">
                Income
                <span className="income-amount">₹{incomeAmt}</span>
                Expense
                <span className="expense-amount">₹{expenseAmt}</span>
            </div>


            <div className="alert alert-primary" role="alert">
            Your Current Balance Summary is : ₹ {incomeAmt - expenseAmt}
            </div>
           
            {/* <div className="alert alert-danger" role="alert">
                Your expenses in these categories are becoming high:
                {highValueExpenseTexts.map((text, index) => (
                <li key={index}>{text.charAt(0).toUpperCase()+ text.slice(1)}</li>
                ))}
            </div> */}


              <div >
                {/* Conditional rendering based on highValueExpenseTexts */}
                {highValueExpenseTexts.length > 0 ? (
                    <>
                       <div className="alert alert-danger" role="alert">
                        Your expenses in these categories are becoming high:
                        <ul>
                            {highValueExpenseTexts.map((text, index) => (
                                <li key={index}>
                                    {text.charAt(0).toUpperCase() + text.slice(1)}
                                </li>
                            ))}
                        </ul>
                        </div>
                    </>
                ) : (
                    <div class="alert alert-success" role="alert">
                        No high-value expenses found.
                    </div>
                )}
            </div>
           

        </div>
    )
}

export default Tip