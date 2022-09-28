import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpensesList from "./components/ExpensesList";

function App() {
  return (
    <div className="app-container">
      {/* make expense form dinamyc rendered */}
      <ExpenseForm />
      {/* add to espenses list tabs for view total of expenses by categoy */}
      <ExpensesList />
    </div>
  );
}

export default App;
