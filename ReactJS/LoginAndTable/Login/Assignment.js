import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import LoggedIn from './UserLoggedIn.js';
// import Employees from './Employees';
// import Employee from './Employee';
import Admin from './Admin';
import LoginScreen from './LoginScreen';
import VendorRead from '../Assignments/API/VendorRead';

function Assignment() {
    return (
        <>
            <div className="text-center">

                <h5>Login-Access Example</h5></div>
            <Router>
                <div className="row">
                    <div className="col-md-2">
                        {/* <ul>
                            <li className="mr-2"><Link to="/">Dashboard</Link></li>
                            <li className="mr-2"><Link to="/employees">Employees </Link></li>
                            <li className="mr-2"><Link to="/client">Client </Link></li>                          
                        </ul> */}
                    </div>
                    <div>
                        <Routes>
                            <Route path="/" element={<LoginScreen />} />
                            <Route path="/loggedin" element={<VendorRead />} />
                            {/* <Route path="/employees" element={<Employees/>}/> */}
                            {/* <Route path="/employees/:eid/:ename" element={<Employee/>}/> */}
                            {/* <Route path="/client*" element={<Client/>}/> */}
                            <Route path="/*" element={<Admin />} />
                            <Route path="/loginscreen" element={<LoginScreen />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </>
    )
}
export default Assignment