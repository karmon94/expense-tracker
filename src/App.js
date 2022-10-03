import { useState } from "react";
import { Fab, Tooltip, Tabs, Tab, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import ExpenseForm from "./components/ExpenseForm";
import ExpensesList from "./components/ExpensesList";

import "./App.css";

function App() {
  const [addExpense, setAddExpense] = useState(false);
  const [value, setValue] = useState(0);

  const addExpenseHandler = (e) => {
    e.preventDefault();
    setAddExpense(true);
  };

  const onCancelHandler = () => {
    setAddExpense(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="app-container">
      {addExpense ? (
        <ExpenseForm onCancel={onCancelHandler} />
      ) : (
        <Tooltip title="Add expense">
          <Fab color="primary" aria-label="add" onClick={addExpenseHandler}>
            <AddIcon />
          </Fab>
        </Tooltip>
      )}

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="tabs of expenses category"
            centered
          >
            <Tab label="Todos" />
            <Tab label="Comida" />
            <Tab label="Educacion" />
            <Tab label="Entretenimiento" />
            <Tab label="Viaje" />
            <Tab label="Otros" />
          </Tabs>
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          <ExpensesList value={value} />
        </Box>
      </Box>
    </div>
  );
}

export default App;
