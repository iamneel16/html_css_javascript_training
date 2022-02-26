import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminAddUser from '../adminadduser';
import AdminEdit from '../admineditaccess';
import DummyApp from '../components/dummyapp';
import AdminSignup from './adminaddproduct';
import AdminMR from './adminmr';
import AdminMrAdd from './adminmradd';
import AdminPage from './adminpage';
import AdminProduct from './adminproduct';
import AdminLogin from './adminuser';
import LoginPageFinal from './loginfinal';
import Signup from './signup';
function DemoRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/admin' element={<AdminPage />}>
                    <Route index element={<h1></h1>}/>
                    <Route path='user' element={<AdminEdit/>}/>
                    <Route path='user/add' element={<AdminAddUser/>}/>
                    <Route path='product' element={<AdminProduct/>}/>
                    <Route path='product/add' element={<AdminSignup/>}/>
                    <Route path='mr' element={<AdminMR/>}/>
                    <Route path='mr/add' element={<AdminMrAdd/>}/>
                </Route>
                <Route path='/' element={<LoginPageFinal />} />
                <Route path='/guest' element={<DummyApp/>}/>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
        </Router>
    )
}
export default DemoRouter