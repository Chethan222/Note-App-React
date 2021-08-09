import React, { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  //Functions and variables to handle form inputs
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState(0);
  const [enteredDate, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    //Or
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const formSubmitHandler = (event) => {
    //Preventing submission of the form
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      id: Math.random().toString(),
    };

    //Sending data to parent component
    props.onAddNewExpense(expenseData);

    //Resetting the fields
    setTitle("");
    setAmount(0);
    setDate("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense">
        <div className="new-expense__control">
          <label> Title </label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
            required
          />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
            required
          />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="date"
            min="2021-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
            required
          />
        </div>
        <div className="new-expense__control">
          <button type="submit"> Add Expense </button>
        </div>
      </div>
    </form>
  );
};

export default NewExpense;
