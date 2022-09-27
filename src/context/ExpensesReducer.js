import { GET_EXPENSES } from "./types";

export const ExpensesReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_EXPENSES:
      return {
        ...state,
      };
    default:
      return state;
  }
};
