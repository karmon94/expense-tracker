import { useReducer } from "react";
import { ExpensesContext } from "./ExpensesContext";
import { ExpensesReducer } from "./ExpensesReducer";

const ExpensesState = (props) => {
  const initialState = {
    expenses: [
      {
        id: 0,
        titulo: "Internet",
        cantidad: "600.00",
        fecha: new Date(2022, 1, 15),
        categoria: "Entretenimiento",
      },
      {
        id: 1,
        titulo: "Despensa",
        cantidad: "1200.00",
        fecha: new Date(2022, 1, 20),
        categoria: "Comida",
      },
      {
        id: 2,
        titulo: "Libro Programacion",
        cantidad: "800.00",
        fecha: new Date(2022, 1, 15),
        categoria: "Educacion",
      },
    ],
  };

  const [state, dispatch] = useReducer(ExpensesReducer, initialState);

  return (
    <ExpensesContext.Provider value={{ expenses: state.expenses }}>
      {props.children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesState;
