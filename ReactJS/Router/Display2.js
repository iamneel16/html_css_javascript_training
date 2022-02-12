import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import ClientParam from './ClientParam';
import Admin from './Admin';
import Client from './Client';
import VendorRead from './Vendor';
import VendorParams from './VendorParams';

function Display2() {
    return (
        <>
            <div className="heading"><h3>Routing</h3></div>
            <Router>
                <div className="row">
                    <div className="col-md-2">
                        <ul className='ulpadding'>
                            <li className="btn btn-dark my-2"><Link to="/">Dashboard </Link></li>
                            <li className="btn btn-dark my-2"><Link to="/client">Client </Link></li>
                            <li className="btn btn-dark my-2"><Link to="/vendor">Vendor </Link></li>
                          

                        </ul>
                    </div>
                    <div className="col-md-10">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/vendor" element={<VendorRead />} />
                    
                            <Route path="/client" element={<Client/>}/>
                            <Route path="/client/:clientId/:clientName" element={<ClientParam/>}/>
                            <Route path="/vendor/:id/:vendorName" element={<VendorParams/>}/>
                            <Route path="/*" element={<Admin/>}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        </>
    )
}

export default Display2