import React from 'react';
import SidebarUser from '../components/SidebarUser'
import './DashboardUser.css';
import { Link } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div className="dash3">
          
                <h1 className="welcomeadmin">Welcome User!!</h1>
            
                <SidebarUser/>
              
               
        </div>
    );
};

export default Dashboard;