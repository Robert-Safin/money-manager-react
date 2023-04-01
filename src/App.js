import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import React, { useState } from "react";

const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 17),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const yearHandler = (year) => {
    setYear(year)
  };

  const [selectedYear, setYear] = useState("2020");



  return (
    <Card>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseFilter selected={selectedYear} onFilterSelect={yearHandler} />

      {expenses
        .filter(
          (expense) => expense.date.getFullYear().toString() === selectedYear
        )
        .map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
    </Card>
  );
};

export default App;
