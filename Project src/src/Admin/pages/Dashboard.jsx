import React from 'react';
import Sidebar from '../components/Sidebar'
import './Dashboard.css';
import { Link } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div className="dash">
          
                <h1 className="welcomeadmin">Welcome Admin!!</h1>
            
                <Sidebar/>
              
               
        </div>
    );
};

export default Dashboard;