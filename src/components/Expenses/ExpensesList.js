import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return (
      <ul>
        <li>
          <h2 className="expenseRes"> No expenses found !</h2>
        </li>
      </ul>
    );
  }
  return (
    <ul>
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
