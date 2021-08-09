import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const initialExpenses = [
  {
    id: "i1",
    title: "WiFi Reacharge",
    amount: 500.0,
    date: new Date(2021, 7, 14),
  },
  {
    id: "i2",
    title: "Fast Food",
    amount: 100.0,
    date: new Date(2021, 2, 12),
  },
  {
    id: "i3",
    title: "Bike Expenses",
    amount: 200.0,
    date: new Date(2021, 2, 28),
  },
  {
    id: "i4",
    title: "Stationaries",
    amount: 250.0,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addNewExpense = (expenseData) => {
    setExpenses((previousExpenses) => {
      return [expenseData, ...previousExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpense} />

      <Expenses items={expenses} />
    </div>
  );
};

export default App;

// return React.createElement(
//   'div',
//   {},
//   React.createElement('h2', {}, "Let's get started!"),
//   React.createElement(Expenses, { items: expenses })
// );
