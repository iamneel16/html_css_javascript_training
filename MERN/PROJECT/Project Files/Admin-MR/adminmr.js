import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router'

function AdminMR() {
        const [flag, setFlag] = useState(false)
        const [id, setId] = useState()
        const [value, setValue] = useState({
                mrdate: '',
                mrno: '',
                supplier: '',
                productname: '',
                quantity: '',
                amount: ''
        })
        const navigate=useNavigate()
        const [mrData, setMRData] = useState([]);
        useEffect(() => {
                axios.get("http://localhost:5000/mr/mr").then(response => {
                        //     console.log(response)
                        //     console.log(response.data)
                        setMRData(response.data)
                        console.log(response.data)

                })
        }, [])
        const onChangeHandler = (event) => {
                setValue({ ...value, [event.target.name]: event.target.value })
        }
        const onEditHandler = (e) => {
                // e.preventDefault()
                setFlag(false)
                console.log(e)
                console.log(mrData[e])
                setValue({
                       mrdate:mrData[e].mrdate,
                       mrno:mrData[e].mrno,
                       supplier:mrData[e].supplier,
                       productname:mrData[e].productname,
                       quantity:mrData[e].quantity,
                       amount:mrData[e].amount
                })
                setId(mrData[e]._id)

        }
        const OnSubmitHandler = (event) => {

                event.preventDefault()

                const URL = `http://localhost:5000/mr/update/${id}`;
                axios.put(URL, value).then(response => {
                        console.log(response);

                })


                axios.get("http://localhost:5000/mr/mr").then(response => {
                        //     console.log(response)
                        //     console.log(response.data)
                        setMRData(response.data)
                        console.log(response.data)

                })
                setFlag(true)

        }
        const onDeleteHandler = (e) => {
                console.log(e)
                setId(mrData[e]._id)

                console.log(mrData[e]._id)
                const URL = `http://localhost:5000/mr/delete/${id}`;
                axios.delete(URL).then(response => {
                        console.log(response);

                })
                axios.get("http://localhost:5000/mr/mr").then(response => {
                        //     console.log(response)
                        //     console.log(response.data)
                        setMRData(response.data)
                        console.log(response.data)

                })

        }

        return (
                <div>
                        <center><button className='btn btn-dark my-2' onClick={()=>navigate('/admin/mr/add')}>Add MR</button></center>
                        <div>
                                <table className='table table-striped table-dark'>

                                        <tbody>
                                                <tr>
                                                        <th>MR Date</th>
                                                        <th>MR No</th>
                                                        <th>Supplier</th>
                                                        <th>Product Name</th>
                                                        <th>quantity</th>
                                                        <th>amount</th>
                                                        <th>Delete</th>
                                                        <th>Edit</th>
                                                        {/* <th>IMG</th> */}

                                                </tr>
                                                {mrData.map((item, idx) => {
                                                        return (

                                                                <tr key={idx}>
                                                                        <td>{item.mrdate}</td>
                                                                        <td>{item.mrno}</td>
                                                                        <td>{item.supplier}</td>
                                                                        <td>{item.productname}</td>
                                                                        <td>{item.quantity}</td>
                                                                        <td>{item.amount}</td>
                                                                        {/* <td>{item.img}</td> */}
                                                                        <td><button className="btn btn-danger" onClick={() => { onDeleteHandler(idx) }}>Delete</button></td>
                                                                        <td><button className="btn btn-info" onClick={() => { onEditHandler(idx) }}>Edit</button></td>
                                                                </tr>

                                                        )
                                                })}
                                        </tbody>
                                </table>

                        </div>
                        <div className='container'>
            <div className='app-wrapper'>
                <div>
                    <h2 className='title'>Edit MR details</h2>
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
                        <button className='submit'onClick={OnSubmitHandler} >Edit MR Details</button>
                    </div>
                    {flag ? <div>
                        <h5 className='title'>MR Edited Successfully</h5>
                    </div> : ""}

                </form>
            </div>
        </div>

                </div>


        )
}
export default AdminMR