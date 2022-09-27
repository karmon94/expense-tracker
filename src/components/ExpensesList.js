import { useContext } from "react";
import { ExpensesContext } from "../context/ExpensesContext";
import ExpensesItem from "./ExpensesItem";
import "./ExpensesList.css";

const ExpensesList = () => {
  const { expenses } = useContext(ExpensesContext);

  return (
    <div className="expense-container">
      <h3>header</h3>
      {expenses.map((expense) => (
        <ExpensesItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpensesList;
