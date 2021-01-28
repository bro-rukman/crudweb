import { Component } from "react";
import './Login.scss'
import {connect} from 'react-redux';
import {loginUserAPI} from '../../../config/redux/action';
import Button from '../../../components/atoms/button'


class Login extends Component{
    state={
        email :'',
        password:'',
        isLoading : false
    }
    handleChangeText=(e)=>{
        // console.log('data',e.target.id);
        this.setState({
            [e.target.id] : e.target.value,
        })
    }
    handleLoginSubmit= async ()=>{
        const {email,password} = this.state;
        const {history} = this.props;
        // console.log('data',email,password);
        const res = await this.props.loginAPI({email, password}).catch(err => err);
        if (res) {
            console.log('login success',res);
            // mengambil userData(res) untuk disimpan ke localstorage dan akan dikonsumsi oleh dashboard supaya default account untuk CRUD
            localStorage.setItem('userData',JSON.stringify(res));
            this.setState({
                email : '',
                password : ''
            })
            history.push(`/`);
        }else{
            console.log('login failed');
        }
    }
    render(){
        return(
            <div className="auth-container">
                <div className='auth-card'>
                <p className='auth-title'>Login Page</p>
                <input className='input' type="text" id="email" placeholder='Your email' onChange={this.handleChangeText} value={this.state.email}/>
                <input className='input' type='password' id="password" placeholder=' Your password' onChange={this.handleChangeText} value={this.state.password}/>
                <Button onClick={this.handleLoginSubmit} title ="Log in" loading={this.state.isLoading}/>
                </div>
            </div>
        )
    }
}

const reduxState =(state)=>({
    isLoading : state.isLoading,
});
const reduxDispatch =(dispatch)=>({
    loginAPI : (data)=>dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispatch) (Login);