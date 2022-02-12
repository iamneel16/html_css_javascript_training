import React from 'react';
// import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import 
function Display() {
    return (
        <>
            <h5>Routing</h5>
            <BrowserRouter>
                <ul>
                    <li className="mr-2"><Link to="/home">Home</Link></li>
                    <li className="mr-2"><Link to="/service">Service</Link></li>
                    <li className="mr-2"><Link to="/about">About</Link></li>
                    <li className="mr-2"><Link to="/contactus">Contact Us</Link></li>
                </ul>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contactus" element={<ContactUs />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Display

const Home = () => { return <h1>this is Home Component</h1> }
const Service = () => { return <h1>this is Service Component</h1> }
const About = () => { return <h1>this is About Component</h1> }
const ContactUs = () => { return <h1>this is ContactUs Component</h1> }