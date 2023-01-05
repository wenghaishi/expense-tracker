import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../../Ui/Card';
import ExpensesFilter from '../ExpensesFilter';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear)
      console.log(filteredYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  const numberOfExpenses = filteredExpenses.length

  props.expenseNumber(numberOfExpenses)

  const totalExpenseHandler = (e) => {
    const totalExpense = e
    props.expenseHandler(totalExpense)
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses} expenseHandler={totalExpenseHandler}/>
      {filteredExpenses.length === 0 && <p className='expense-list'>No expense found</p>}
      {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))}
    </Card>
  )
}

export default Expenses