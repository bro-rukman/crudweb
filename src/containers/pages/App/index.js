// import React,{Fragment} from 'react';
import logo from '../../../assets/img/logo/logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Fragment } from 'react';
import Login from '../Login'
import Dashboard from '../Dashboard';
import Register from '../Register'

function App() {
  return (
    <Router>
      <div className="App">
      <ul>
        <li><Link to="/" >Login</Link></li>
        <li><Link to="/register" >Register</Link></li>
        <li><Link to="/dashboard" >Dashboard</Link></li>
      </ul>
      <br/>
      <Route path="/" exact component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/dashboard" component={Dashboard}/>
    


    
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
</Router>
  );
}

export default App;
