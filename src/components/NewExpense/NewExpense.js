import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense = (props) => {

  const [editing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    console.log(expenseData);
    setIsEditing(false);
  };

  const editHandler = () => {
    setIsEditing(true);
  };


  const cancelHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
        {editing === false && <button onClick={editHandler}>Add new expense</button>}
        {editing=== true && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancel={cancelHandler}/>}
    </div>
  )
}

export default NewExpense