import { useContext } from "react";
import { ExpensesContext } from "../context/ExpensesContext";
import ExpensesItem from "./ExpensesItem";
import "./ExpensesList.css";

const ExpensesList = ({ value }) => {
  const { expenses } = useContext(ExpensesContext);
  let header = "";
  let filteredExpenses = [];
  let total = 0;

  const filterExpenses = (expenses, category) => {
    return expenses.filter((expense) => expense.categoria === category);
  };

  const calcularTotal = (filteredExpenses) => {
    let total = 0;

    filteredExpenses.forEach((expense) => {
      total = total + +expense.cantidad;
    });

    return total.toFixed(2);
  };

  switch (value) {
    case 0:
      header = "Todos los gastos";
      filteredExpenses = expenses;
      total = calcularTotal(filteredExpenses);
      break;
    case 1:
      header = "Gastos de comida";
      filteredExpenses = filterExpenses(expenses, "comida");
      total = calcularTotal(filteredExpenses);

      break;

    case 2:
      header = "Gastos de educación";
      filteredExpenses = filterExpenses(expenses, "educacion");
      total = calcularTotal(filteredExpenses);

      break;

    case 3:
      header = "Gastos de entretenimiento";
      filteredExpenses = filterExpenses(expenses, "entretenimiento");
      total = calcularTotal(filteredExpenses);

      break;

    case 4:
      header = "Gastos de viaje";
      filteredExpenses = filterExpenses(expenses, "viajes");
      total = calcularTotal(filteredExpenses);

      break;

    case 5:
      header = "Otros gastos";
      filteredExpenses = filterExpenses(expenses, "otros");
      total = calcularTotal(filteredExpenses);

      break;

    default:
      header = "Todos los gastos";
      filteredExpenses = expenses;
      total = calcularTotal(filteredExpenses);

      break;
  }

  return (
    <div className="expense-container">
      <h3>{header}</h3>
      <hr></hr>

      <div className="expenses-list">
        {filteredExpenses.map((expense) => (
          <ExpensesItem key={expense.id} expense={expense} />
        ))}
        {filteredExpenses.length === 0 && <p>No existen gastos que mostrar</p>}
      </div>

      {filteredExpenses.length > 0 && (
        <div className="total-expenses">
          <h4>Total:</h4>
          <p>${total}</p>
        </div>
      )}
    </div>
  );
};

export default ExpensesList;
