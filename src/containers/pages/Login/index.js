import { Component } from "react";
import './Login.scss'
import {connect} from 'react-redux';

class Login extends Component{
    render(){
        return(
            <div className="login">
                <p>Login Page {this.props.popupProps}</p>
                <button>Go to Register</button>
                <button>Go to Dashboard</button>
            </div>
        )
    }
}
const reduxState=(state)=>({
    popupProps : state.popup,
})

export default connect(reduxState, null) (Login);