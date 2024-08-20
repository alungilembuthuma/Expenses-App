import DisplayTransaction from "./displayTransaction"
import AddTransaction from "./add"
function Home(props){
    return(
        <div>
            <DisplayTransaction transactions={props.transactions}/>
            <AddTransaction add={props.add}/>
        </div>
    )
}
export default Home