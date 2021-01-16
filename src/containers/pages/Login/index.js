import { Component } from "react";
import './Login.scss'

class Login extends Component{
    render(){
        return(
            <div className="login">
                <p>Login Page</p>
                <button>Go to Register</button>
                <button>Go to Dashboard</button>
            </div>
        )
    }
}

export default Login;