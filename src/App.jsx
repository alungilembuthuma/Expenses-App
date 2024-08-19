import { useState } from 'react';
import './App.css';
import AddTransaction from './components/add';

function App() {
  const [transactions, setTransactions] = useState([]);

  const add = (transactionItem, amount, transactionType) => {
    setTransactions((prevTransactions) => [...prevTransactions, { transactionItem, amount, transactionType }]);
  };

  return (
    <>
      <div className="container">
        <AddTransaction add={add} />
      </div>
    </>
  );
}

export default App;