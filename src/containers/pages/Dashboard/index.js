import {Component} from 'react';
import './Dashboard.scss';


class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard">
            <p>Dashboard Page</p>
                <button>Go to Register</button>
                <button>Go to Login</button>
                </div>
        )
    }
}
export default Dashboard;
