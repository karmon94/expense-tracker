import "./ExpensesItem.css";

const ExpensesItem = ({ expense }) => {
  const month = expense.fecha.toLocaleString("es-MX", { month: "short" });
  const day = expense.fecha.toLocaleString("es-MX", { day: "2-digit" });
  const year = expense.fecha.getFullYear();

  return (
    <div className="expense-item-container">
      <div className="expense-date-title">
        <div className="expense-date">
          <p className="expense-month">{month}</p>
          <p className="expense-year">{year}</p>
          <p className="expense-day">{day}</p>
        </div>
        <h4 className="expense-title">{expense.titulo}</h4>
      </div>
      <p className="expense-amount">$ {expense.cantidad}</p>
    </div>
  );
};

export default ExpensesItem;
