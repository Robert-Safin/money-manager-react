import "./NewExpense.css";
import "./ExpenseForm.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  const onFormSubmitHandler = (formData) => {
    const expenseData = {
      ...formData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsPressed(false);
  };

  const [isPressed, setIsPressed] = useState(false);

  const showFormHandler = () => {
    setIsPressed(true);
  };

  const cancelSubmitHandler = () => {
    setIsPressed(false);
  };

  if (isPressed === false) {
    return (
      <div className="new-expense">
        <button onClick={showFormHandler}>Add new expense</button>
      </div>
    );
  } else {
  return (
    <div className="new-expense">
      <ExpenseForm onFormSubmit={onFormSubmitHandler} />
      <button onClick={cancelSubmitHandler}>Cancel</button>
    </div>
  )
  }
};

export default NewExpense;
