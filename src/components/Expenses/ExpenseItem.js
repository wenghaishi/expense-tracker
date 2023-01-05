import React, { useState } from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../../Ui/Card";

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title)
  const [editTitle, setEditTitle] = useState(false)
  const [newTitle, setNewTitle] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    setTitle(newTitle);
    setEditTitle(false)
    console.log(title)
  };

  const editHandler = () => {
    setEditTitle(true)
  }

  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {editTitle === false && <button onClick={editHandler} className="change-button">Change title</button>}
      {editTitle === true && 
        <form className="form" onSubmit={submitHandler}>
          <div className="label-input">
            <label className="new-title-text">New title</label>
            <input type="text" className="change-title-input" value={newTitle} onChange={titleChangeHandler}></input>
          </div>
          <button type="submit" className="change-button" >Change title</button>
        </form>}
    </Card>
  );
}

export default ExpenseItem;
