import React, { useState } from 'react'
import './ExpenseForm.css'


function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [isAmountValid, setIsAmountValid] = useState(true)
    const [isTitleValid, setIsTitleValid] = useState(true)

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        setIsTitleValid(true)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        setIsAmountValid(true)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        if (expenseData.amount === 0 && (expenseData.title === '')) {
            setIsAmountValid(false)
            setIsTitleValid(false)
            return
        }

        if (expenseData.amount === 0) {
            setIsAmountValid(false)
            return
        }

        if (expenseData.title === '') {
            setIsTitleValid(false)
            return
        }

        console.log(expenseData);
        
        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

  return (


    <form onSubmit={submitHandler}>
    <div >
        
        <div className='new-expense__control'>
            <label>Title</label>
            <input style={{backgroundColor: !isTitleValid ? '#ff0000' : 'white' }} type='text' value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Amount (In numbers) </label>
            <input style={{backgroundColor: !isAmountValid ? '#ff0000' : 'white' }} type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min="2023-01-01" max="2025-01-01" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
            <button onClick={props.cancel}>Cancel</button>
        </div>
    </div>
    </form>
  )
}

export default ExpenseForm