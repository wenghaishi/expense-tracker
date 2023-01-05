import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense = (props) => {

  const [editing, setIsEditing] = useState(false);
  const [totalExpense, setTotalExpense] = useState()

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

  const totalExpenseHandler = () => {
    setTotalExpense()
  }

  return (
    <div className='new-expense'>
        {editing === false && (
          <>
            <button onClick={editHandler}>Add new expense</button>
            <div className='total-expense-title-container '>
              <h1 className='total-expense-title'>Total expense: ${props.totalExpense}</h1>
              <h1 className='total-expense-title'>Number of expenses:  {props.noExpense}</h1>
            </div>
          </>
        )}
        {editing=== true && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancel={cancelHandler}/>}
    </div>
  )
}

export default NewExpense