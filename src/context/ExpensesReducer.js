import { ADD_EXPENSE, GET_EXPENSES } from "./types";

export const ExpensesReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_EXPENSES:
      return {
        ...state,
      };
    case ADD_EXPENSE:
      let newExpenses = state.expenses.concat([payload]);
      newExpenses.sort(compareDate);
      return { expenses: newExpenses };
    default:
      return state;
  }
};

function compareDate(a, b) {
  if (a.fecha > b.fecha) {
    return -1;
  }

  if (a.fecha < b.fecha) {
    return 1;
  }

  return 0;
}
