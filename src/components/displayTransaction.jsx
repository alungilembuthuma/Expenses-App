import React from "react"
function DisplayTransaction(props){
    return(
        <div>
            <h4>History of your transcaction</h4>
            {props.transactions.map((data)=>(
          <div>
           <div className="List-Item">
             <div>
                <h6>{data.transactionItem}</h6>
             </div>
             <div>
             <h6>{data.amount}</h6>
             </div>
             <div>
             {data.transactionType == "Expense" ? <div className='ExpenseIndicator'></div>:<div className='IncomeIndicator' ></div>}
             <h6>{data.transactionType}</h6>
             </div>
            <div/>
          </div>
       </div>
    ))}
        </div>
    )
}
export default DisplayTransaction