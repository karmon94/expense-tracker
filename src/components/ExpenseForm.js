import { nanoid } from "nanoid";
import { useContext, useState } from "react";
import { ExpensesContext } from "../context/ExpensesContext";

import "./ExpenseForm.css";

const ExpenseForm = ({ onCancel }) => {
  const expenseCtx = useContext(ExpensesContext);
  const [expense, setExpense] = useState({
    titulo: "",
    cantidad: 0,
    fecha: "",
    categoria: "",
    error: null,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setExpense({ ...expense, [e.target.name]: e.target.value, error: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      expense.titulo &&
      expense.cantidad &&
      expense.fecha &&
      expense.categoria
    ) {
      const expenseData = {
        id: nanoid(),
        titulo: expense.titulo,
        cantidad: expense.cantidad,
        fecha: new Date(expense.fecha),
        categoria: expense.categoria,
      };

      expenseCtx.addExpense(expenseData);

      // setExpense({ titulo: "", cantidad: 0, fecha: "", categoria: "" });
    } else {
      setExpense({
        ...expense,
        error: "Complete todos los campos del formulario!",
      });
    }
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    onCancel();
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
            min="0"
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
            <option></option>
            <option value="comida">Comida</option>
            <option value="educacion">Educación</option>
            <option value="entretenimiento">Entretenimiento</option>
            <option value="viajes">Viajes</option>
            <option value="otros">Otros</option>
          </select>
        </div>
      </div>

      <div className="form-error">
        {expense.error && <p>{expense.error}</p>}
      </div>

      <div className="buttons-container">
        <button type="submit" className="btn btn-submit">
          Agregar
        </button>

        <button
          type="button"
          className="btn btn-cancel"
          onClick={cancelHandler}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
