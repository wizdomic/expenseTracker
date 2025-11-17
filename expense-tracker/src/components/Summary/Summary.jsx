import { useContext } from "react";
import { TransactionContext } from "../../context/Transactioncontext";
import { calculateTotals } from "../../utils/calculateTotals";
import styles from "./Summary.module.css";


export default function Summary({ capital }) {
  const { transactions } = useContext(TransactionContext);
  const { income, expense, net } = calculateTotals(transactions);

  const remaining = capital !== null ? capital - expense : null;

  return (
    <div className={styles.summary}>
      {capital !== null && (
        <div className={styles.row}>
          <span>Total Capital</span>
          <span>₹{capital}</span>
        </div>
      )}

      <div className={styles.row}>
        <span>Total Income</span>
        <span className={styles.income}>₹{income}</span>
      </div>

      <div className={styles.row}>
        <span>Total Expense</span>
        <span className={styles.expense}>₹{expense}</span>
      </div>

      <div className={styles.row}>
        <span>Net Balance</span>
        <span className={styles.net}>₹{net}</span>
      </div>

      {capital !== null && (
        <div className={styles.row}>
          <span>Remaining (Capital - Expense)</span>
          <span className={styles.net}>₹{remaining}</span>
        </div>
      )}
    </div>
  );
}

