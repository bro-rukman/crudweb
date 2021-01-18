import { Component } from "react"
import './Register.scss';
import firebase from '../../../config/firebase';
// import 'bootstrap/dist/css';

class Register extends Component{
    state={
        email :'',
        password:''
    }
    handleChangeText=(e)=>{
        // console.log('data',e.target.id);
        this.setState({
            [e.target.id] : e.target.value,
        })
    }
    handleRegisterSubmit=()=>{
        const {email,password} = this.state;
        console.log('data',email,password);
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log('success', res);
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('err',errorCode,errorMessage);
        });
    }
    render(){
        return(
            <div className="auth-container">
                <div className='auth-card'>
                <p className='auth-title'>Register Page</p>
                <input className='input' type="text" id="email" placeholder='Email' onChange={this.handleChangeText}/>
                <input className='input' type='password' id="password" placeholder='Password' onChange={this.handleChangeText}/>
                <button className='btn' onClick={this.handleRegisterSubmit}>Register</button>
                </div>
                {/* <button>Go to Dashboard</button> */}
            </div>
        )
    }
}

export default Register;