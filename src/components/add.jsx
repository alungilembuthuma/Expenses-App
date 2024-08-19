import {useState} from 'react';

function AddTransaction (){

    const [transactionItem , setTransactionItem]= useState('');
    const [Amount , setAmount]= useState('');
    const [transactionType , setTransactionType]= useState('');

    return(
    
        <div>
            <h2>Add a New Transaction</h2>

        <input type="text" placeholder="Enter Item " onChange={(event)=>setTransactionItem(event.target.value) }/><br></br>
        <input type="text" placeholder="Enter Amount"  onChange={(event)=>setTransactionAmount(event.target.value) }/>
        <br></br>
        <select onChange={(event)=>setTransactionType(event.target.value) }>
            <option>Income</option>
            <option>Expense</option>
        </select>
        <br></br>
        <button onClick={Add}>Add a Transaction</button>
            </div>
    )
}

export default AddTransaction;