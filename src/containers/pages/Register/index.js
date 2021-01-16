import { Component } from "react"
import './Register.scss';

class Register extends Component{
    render(){
        return(
            <div className="register">
                <p>Register Page</p>
                <button>Go to Login</button>
                <button>Go to Dashboard</button>
            </div>
        )
    }
}

export default Register;