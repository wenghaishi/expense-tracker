import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import './App.css'  

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);
  const [totalExpense, setTotalExpense] = useState()

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    console.log(expenses);
  };

  const totalExpenseHandler = (e) => {
    setTotalExpense(e)
  }


  return (
    <div>
      <h1 className="title">Expense tracker app</h1>
      <NewExpense onAddExpense={addExpenseHandler} totalExpense={totalExpense}/>
      <Expenses items={expenses} expenseHandler={totalExpenseHandler}/>
    </div>
  );
}

export default App;
