import { useState, useEffect } from "react";
import { TransactionContext } from "./Transactioncontext.js";
import generateId from "../utils/generateId";

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    return JSON.parse(localStorage.getItem("transactions")) || [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (text, amount, category, type) => {
    const newTransaction = {
      id: generateId(),
      text,
      amount: parseFloat(amount),
      category,
      type, // income or expense
      date: new Date().toLocaleDateString(),
    };

    setTransactions([newTransaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((item) => item.id !== id));
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, deleteTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
