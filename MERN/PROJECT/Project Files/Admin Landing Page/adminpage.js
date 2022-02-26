import React from 'react'
import { Navigate, Outlet } from 'react-router';
import { useNavigate } from 'react-router';
function AdminPage() {
    const navigate= useNavigate()
    const onClickHandle=(tonavigate)=>{
        return navigate(tonavigate)
    }
    return (
        <div>
            <div className='heading'>
                <h1>Welcome Admin <button className='btn btn-success' onClick={()=>onClickHandle('/admin/user')}>User</button> <button className='btn btn-primary' onClick={()=>onClickHandle('/admin/product')}>Product </button><button className='btn btn-light mx-2' onClick={()=>navigate('/admin/mr')}>MR </button> <button className='btn btn-danger mx-2' onClick={()=>onClickHandle('/')}><strong>SignOut</strong></button> </h1> 
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}
export default AdminPage