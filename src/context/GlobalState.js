import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: [
    {
      id: 1,
      text: "flower",
      amount: -20,
    },
    {
      id: 2,
      text: "Book",
      amount: -10,
    },
    {
      id: 3,
      text: "Salary",
      amount: -10,
    },
    {
      id: 4,
      text: "Camera",
      amount: 150,
    },
  ],
};

// create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// the global state, acts like useState, just that it is now provided globally
// usereducer acts like useState, but is more complex, and preferred for passing deep data, between components
