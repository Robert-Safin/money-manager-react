import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {

  const [newTitle, setTitle] = useState("");
  const [newAmount, setAmount] = useState("");
  const [newDate, setDate] = useState("");


  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };


  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
    }
    props.onFormSubmit(formData)
    setTitle('')
    setAmount('')
    setDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className=".new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={newTitle}/>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={newAmount}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={newDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
