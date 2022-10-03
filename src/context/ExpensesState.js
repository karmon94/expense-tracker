import { useReducer } from "react";
import { ExpensesContext } from "./ExpensesContext";
import { ExpensesReducer } from "./ExpensesReducer";

const ExpensesState = (props) => {
  const initialState = {
    expenses: [
      {
        id: 0,
        titulo: "Despensa",
        cantidad: "1200.00",
        fecha: new Date(2022, 1, 20),
        categoria: "comida",
      },
      {
        id: 1,
        titulo: "Internet",
        cantidad: "600.00",
        fecha: new Date(2022, 1, 15),
        categoria: "entretenimiento",
      },
      {
        id: 2,
        titulo: "Libro Programacion",
        cantidad: "800.00",
        fecha: new Date(2022, 1, 15),
        categoria: "educacion",
      },
    ],
  };

  const [state, dispatch] = useReducer(ExpensesReducer, initialState);

  const addExpense = (expense) => {
    dispatch({ type: "ADD_EXPENSE", payload: expense });
  };

  return (
    <ExpensesContext.Provider value={{ expenses: state.expenses, addExpense }}>
      {props.children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesState;
