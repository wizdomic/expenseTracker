import Header from "./components/Header/Header";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import TransactionList from "./components/TransactionList/TransactionList";
import Summary from "./components/Summary/Summary";
import styles from "./App.module.css";
import AddCapital from "./components/AddCapital/AddCapital";
import { useState } from "react";

function App() {
  const [capital, setCapital] = useState(0);

  return (
    <div className={styles.container}>
      <Header />
      <Summary capital={capital}/>
      <AddTransaction />
      <TransactionList />
      <AddCapital setCapital={setCapital}/>
    </div>
  );
}

export default App;
