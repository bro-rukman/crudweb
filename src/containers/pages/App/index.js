// import React,{Fragment} from 'react';
// import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from '../Login'
import Dashboard from '../Dashboard';
import Register from '../Register'
import {store} from '../../../config/redux'
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/" >Dashboard</Link></li>
            <li><Link to="/register" >Register</Link></li>
            <li><Link to="/login" >Login</Link></li>
          </ul>
        </nav>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
      </div>
</Router>
    </Provider>
  );
}

export default App;
