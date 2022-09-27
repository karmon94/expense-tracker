import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpensesList from "./components/ExpensesList";

function App() {
  return (
    <div className="app-container">
      <ExpenseForm />
      <ExpensesList />
    </div>
  );
}

export default App;
