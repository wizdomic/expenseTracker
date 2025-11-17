import { useContext } from "react";
import { TransactionContext } from "../../context/Transactioncontext.js";
import styles from "./TransactionList.module.css";

export default function TransactionList() {
  const { transactions, deleteTransaction } = useContext(TransactionContext);

  return (
    <div className={styles.listSection}>
      <h3 className={styles.listSection}>Transaction History</h3>

      <ul className={styles.list}>
        {transactions.map((t) => (
          <li
            key={t.id}
            className={`${styles.item} ${t.type === "income" ? styles.income : styles.expense}`}
          >
            <div>
              <p className={styles.text}>{t.text} ({t.category})</p>
              <small>{t.date}</small>
            </div>

            <div className={styles.right}>
              <span className={styles.amount}>₹{t.amount}</span>

              <button
                className={styles.delete}
                onClick={() => deleteTransaction(t.id)}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
