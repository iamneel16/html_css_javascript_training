import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';

const AdminMrAdd = () => {
    const [value, setValue] = useState({
        mrdate: '',
        mrno:'',
        supplier:'',
        productname: '',
        quantity:'',
        amount:''
    })
    const navigate = useNavigate()
    const [flag, setFlag] = useState(false)
    const OnSubmitHandler = (event) => {

        event.preventDefault()
            setFlag(true)
            console.log(value)
            const URL = "http://localhost:5000/mr/add";
            axios.post(URL,value).then(response=>{
            console.log(response);
           
        });

    }
   
    const onChangeHandler = (event) => {
        setFlag(false)
        setValue({ ...value, [event.target.name]: event.target.value })
    }

    return (
        <div className='container'>
            <div className='app-wrapper'>
                <div>
                    <h2 className='title'>Add MR details</h2>
                </div>
                <form className='form-wrapper'>
                <div className='name'>
                        <label className='label'>MR Date</label>
                        <input type='date' className="input" name='mrdate' value={value.mrdate} onChange={onChangeHandler} autoComplete='off' />
                    </div>
                    <div className='name'>
                        <label className='label'>MR No: </label>
                        <input type="number" className="input" name='mrno' value={value.mrno} onChange={onChangeHandler} autoComplete='off' />
                    </div>
                    <div className='name'>
                        <label className='label'>Supplier</label>
                        <input type="text" className="input" name='supplier' value={value.supplier} onChange={onChangeHandler} />
                    </div>
                    <div className='name'>
                        <label className='label'>Productname</label>
                        <input type="text" className="input" name='productname' value={value.productname} onChange={onChangeHandler} />
                    </div>
                    <div className='name'>
                        <label className='label'>Quantity</label>
                        <input type="number" className="input" name='quantity' value={value.quantity} onChange={onChangeHandler} autoComplete='off' />
                    </div>
                    <div className='name'>
                        <label className='label'>Amount</label>
                        <input type="number" className="input" name='amount' value={value.amount} onChange={onChangeHandler} autoComplete='off' />
                    </div>
                    <div>
                        <button className='submit' onClick={OnSubmitHandler}>Add MR Details</button>
                    </div>
                    {flag ? <div>
                        <h5 className='title'>MR Added Successfully</h5>
                        <button className='submitsignup'onClick={()=>(navigate('/admin/mr'))}>View MR List</button>
                    </div> : ""}

                </form>
            </div>
        </div>
    )
}



export default AdminMrAdd