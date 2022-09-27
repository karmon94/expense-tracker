import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [expense, setExpense] = useState({
    titulo: "",
    cantidad: 0,
    fecha: "",
    categoria: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const expenseData = {
    //   title: enteredTitle,
    //   amount: enteredAmount,
    //   date: new Date(enteredDate),
    // };

    // props.onSaveExpenseData(expenseData);
    // setEnteredTitle("");
    // setEnteredAmount("");
    // setEnteredDate("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="row">
        <div className="row-input">
          <label htmlFor="titulo">Título</label>
          <input
            id="titulo"
            type="text"
            name="titulo"
            value={expense.titulo}
            onChange={handleChange}
          />
        </div>

        <div className="row-input">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            name="cantidad"
            min="0.01"
            step="0.01"
            value={expense.cantidad}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row">
        <div className="row-input">
          <label htmlFor="fecha">Fecha</label>
          <input
            id="fecha"
            type="date"
            name="fecha"
            min="2019-01-01"
            value={expense.fecha}
            onChange={handleChange}
          />
        </div>

        <div className="row-input">
          <label htmlFor="categoria">Categoria</label>
          <select
            name="categoria"
            value={expense.categoria}
            onChange={handleChange}
          >
            <option value="comida">Comida</option>
            <option value="educacion">Educación</option>
            <option value="entretenimiento">Entretenimiento</option>
            <option value="gastos">Gastos</option>
            <option value="viajes">Viajes</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn-submit">
        Agregar
      </button>
    </form>
  );
};

export default ExpenseForm;
