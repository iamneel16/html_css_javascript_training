import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';

function AdminProduct() {
        const navigate = useNavigate()
        const [productData, setProductData] = useState([]);
        const [value, setValue] = useState({
                productid: '',
                productname: '',
                price: '',
                description: '',
                img:""
        })
        const [flag, setFlag] = useState(false)
        const [id, setId] = useState()
        useEffect(() => {
                axios.get("http://localhost:5000/product/product").then(response => {
                        //     console.log(response)
                        //     console.log(response.data)
                        setProductData(response.data)
                        console.log(response.data)

                })
        }, [])
        const onClickHandle = (e) => {
                // e.preventDefault()
                setFlag(false)
                console.log(e)
                console.log(productData[e])
                setValue({
                        productid: productData[e].productid,
                        productname: productData[e].productname,
                        price: productData[e].price,
                        description: productData[e].description,
                        img:productData[e].img
                })
                setId(productData[e]._id)

        }
        const onChangeHandler = (event) => {
                setValue({ ...value, [event.target.name]: event.target.value })
        }
        const OnSubmitHandler = (event) => {

                event.preventDefault()

                const URL = `http://localhost:5000/product/update/${id}`;
                axios.put(URL, value).then(response => {
                        console.log(response);

                })
                axios.get("http://localhost:5000/product/product").then(response => {
                        //     console.log(response)
                        //     console.log(response.data)
                        setProductData(response.data)
                        console.log(response.data)

                })
                setFlag(true)

        }
        const onClickHandleDelete = (e) => {
                // e.preventDefault()
                console.log(e)
                setId(productData[e]._id)

                console.log(productData[e]._id)
                const URL = `http://localhost:5000/product/delete/${id}`;
                axios.delete(URL).then(response => {
                        console.log(response);

                })
                axios.get("http://localhost:5000/product/product").then(response => {
                        //     console.log(response)
                        //     console.log(response.data)
                        setProductData(response.data)
                        console.log(response.data)

                })

        }

        return (
                <div>
                        <center><button className='btn btn-dark my-2' onClick={() => navigate('/admin/product/add')}>Add Product</button></center>
                        <div>

                                <table className='table table-striped table-dark'>

                                        <tbody>
                                                <tr>
                                                        <th>ProductID</th>
                                                        <th>Product Name</th>
                                                        <th>Product Price</th>
                                                        <th>Description</th>
                                                        <th>Delete</th>
                                                        <th>Edit</th>
                                                        {/* <th>IMG</th> */}

                                                </tr>
                                                {productData.map((item, idx) => {
                                                        return (

                                                                <tr key={idx}>
                                                                        <td>{item.productid}</td>
                                                                        <td>{item.productname}</td>
                                                                        <td>{item.price}</td>
                                                                        <td>{item.description}</td>
                                                                        {/* <td>{item.img}</td> */}
                                                                        <td><button className="btn btn-danger" onClick={() => { onClickHandleDelete(idx) }}>Delete</button></td>
                                                                        <td><button className="btn btn-info" onClick={() => { onClickHandle(idx) }}>Edit</button></td>
                                                                </tr>

                                                        )
                                                })}
                                        </tbody>
                                </table>

                        </div>
                        <div className='container'>
                                <div className='app-wrapper'>
                                        <div>
                                                <h2 className='title'>Edit Product Details</h2>
                                        </div>
                                        <form className='form-wrapper'>
                                                <div className='name'>
                                                        <label className='label'>ID</label>
                                                        <input type="text" className="input" name='productid' value={value.productid} onChange={onChangeHandler} autoComplete='off' />
                                                </div>
                                                <div className='password'>
                                                        <label className='label'>Product Name</label>
                                                        <input type="text" className="input" name='productname' value={value.productname} onChange={onChangeHandler} />
                                                </div>
                                                <div className='name'>
                                                        <label className='label'>Price</label>
                                                        <input type="number" className="input" name='price' value={value.price} onChange={onChangeHandler} autoComplete='off' />
                                                </div>
                                                <div className='name'>
                                                        <label className='label'>Description</label>
                                                        <input type="text" className="input" name='description' value={value.description} onChange={onChangeHandler} autoComplete='off' />
                                                </div>
                                                <div className='name'>
                                                        <label className='label'>Image Link</label>
                                                        <input type="text" className="input" name='img' value={value.img} onChange={onChangeHandler} autoComplete='off' />
                                                </div>
                                                <div>
                                                        <button className='submit' onClick={OnSubmitHandler}>Edit Product</button>
                                                </div>
                                                {flag ? <div>
                                                        <h5 className='title'>Product Edited Successfully</h5>
                                                </div> : ""}

                                        </form>
                                </div>
                        </div>

                </div>


        )
}
export default AdminProduct