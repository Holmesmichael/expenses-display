import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const MOCK_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amount: 52.93, date: new Date (2021, 7, 28) },
  { id: 'e2', title: 'Laptop', amount: 883.49, date: new Date (2020, 8, 4) },
  { id: 'e3', title: 'Car Insurance', amount: 329.23, date: new Date (2022, 1, 19) },
  { id: 'e4', title: 'House Paint', amount: 298.34, date: new Date (2021, 10, 26) },
];

const App = () => {
  const [expenses, setExpenses] = useState(MOCK_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense
        onAddExpense={addExpenseHandler}
      />
      <Expenses 
        items={expenses}  
      />
    </div>
  );
}

export default App;
