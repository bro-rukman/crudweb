import { Component } from "react";
import './Login.scss'
import {connect} from 'react-redux';
import {actionUsername} from '../../../config/redux/action'

class Login extends Component{
    changeUser=()=>{
        this.props.changeUserName(); 
    }
    render(){
        return(
            <div className="login">
                <p>Login Page {this.props.userName}</p>
                <button onClick={this.changeUser}>Change Username</button>
                <button>Go to Dashboard</button>
            </div>
        )
    }
}

const reduxState=(state)=>({
    popupProps : state.popup,
    userName : state.user
})
const reduxDispatch =(dispatch)=>({
    changeUserName : ()=>dispatch(actionUsername())
})

export default connect(reduxState, reduxDispatch) (Login);