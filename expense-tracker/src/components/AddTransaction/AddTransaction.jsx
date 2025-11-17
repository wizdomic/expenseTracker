import { useContext, useState } from "react";
import { TransactionContext } from "../../context/Transactioncontext.js";
import styles from "./AddTransaction.module.css";

export default function AddTransaction() {
  const { addTransaction } = useContext(TransactionContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("");

  const handleAdd = () => {
    if (!text || !amount || !category) {
      alert("Please fill all fields!");
      return;
    }
    addTransaction(text, amount, category, type);
    setText("");
    setAmount("");
    setCategory("");
  };

  return (
    <div>
      <h3>Add Transaction</h3>

      <input
        className={styles.input}
        placeholder="Description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        className={styles.input}
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select className={styles.input} value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option>Food</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Salary</option>
        <option>Investment</option>
        <option>MaujMastii</option>
        <option>Other</option>
      </select>

      <select className={styles.input} value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button className={styles.button} onClick={handleAdd}>Add Transaction</button>
    </div>
  );
}
