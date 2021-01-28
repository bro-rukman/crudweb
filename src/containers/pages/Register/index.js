import { Component } from "react"
import './Register.scss';
import {connect} from 'react-redux';
import {registerUserAPI} from '../../../config/redux/action';

// import { Button } from "bootstrap";
import Button from '../../../components/atoms/button'

// import 'bootstrap/dist/css';

class Register extends Component{
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
    handleRegisterSubmit= async()=>{
        const {email,password} = this.state;
        console.log('data',email,password);
        const res = await this.props.registerAPI({email, password}).catch(err=>err);
        if (res) {
            this.setState({
                email : '',
                password : ''
            })
        }
    }
            // untuk mengembalikan form register menjadi kosong setelah di submit
        // menggunakan fungsi button untuk menghandle ketika ferivikasi data ke firebase dari sisi ux nya
        // this.setState({
        //     isLoading:true
        // })
        // setTimeout(() => {
        //     this.setState({
        //         isLoading:false
        //     })
        // }, 2000);
        
    
    render(){
        return(
            <div className="auth-container">
                <div className='auth-card'>
                <p className='auth-title'>Register Page</p>
                <input className='input' type="text" id="email" placeholder='Email' onChange={this.handleChangeText} value={this.state.email}/>
                <input className='input' type='password' id="password" placeholder='Password' onChange={this.handleChangeText} value={this.state.password}/>
                <Button onClick={this.handleRegisterSubmit} title ="Register" loading={this.props.isLoading}/>
                </div>
                {/* <button>Go to Dashboard</button> */}
            </div>
        )
    }
}
const reduxState =(state)=>({
    isLoading : state.isLoading,
});
const reduxDispatch =(dispatch)=>({
    registerAPI : (data)=>dispatch(registerUserAPI(data))
})

export default connect(reduxState,reduxDispatch)(Register);