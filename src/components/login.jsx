import React from "react"
import { Link,useNavigate } from "react-router-dom"
function Login(){
 const  goToHome =useNavigate()
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={()=>goToHome('/home')}>Go To Home Page</button>
        </div>
    )
}
export default Login