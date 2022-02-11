import React, { Component } from 'react';

class DisplayProduct extends Component {
    constructor() {
        super();
        this.state = { eIndex: -1, pStatus: false, pShowroomA: false, pShowroomB: false, Product: { productcode: '', productname: '', shipped: '', pSell: '',cat:'' }, ProductData: []};
    }
    onChangeHandler = (e) => {
        console.log("change ", e.target);
        let { name, value, checked } = e.target;
        if (value === 'Showroom A') {
            this.setState({ pShowroomA: true, pShowroomB: false })
        }
        if (value === 'Showroom B') {
            this.setState({ pShowroomA: false, pShowroomB: true })
        }
        if (name === 'shipped') {
            value = checked;
            this.setState({ pStatus: checked });
        }
        // if (name==='cat'){
        //     console.log(e.target.value)
        // }
        let { Product } = this.state;
        this.setState({ Product: { ...Product, [name]: value } });
    }
    onSubmit = (e) => {
        e.preventDefault();
        let { ProductData, Product, eIndex } = this.state;
        if (eIndex >= 0) {
            ProductData[eIndex] = Product;
        } else {

            ProductData.push(Product);
        }
        this.setState({ ProductData, pStatus: false });
        this.setState({ ProductData: ProductData });
        Product = { productcode: '', productname: '', shipped: '', pSell: '',cat:'' };
        this.setState({ Product });
        this.setState({ pShowroomA: false, pShowroomB: false, eIndex: -1 });
    }
    onDelete = (DeleteIndex) => {
        let { ProductData } = this.state;
        ProductData.splice(DeleteIndex, 1);
        this.setState({ ProductData });
    }
    onEdit = (item, index) => {
        console.log("Item ", item);
        let { Product, pStatus, pShowroomA, pShowroomB, eIndex } = this.state;
        eIndex = index;
        Product.productcode = item.productcode;
        Product.productname = item.productname;
        Product.shipped = item.shipped;
        Product.pSell = item.pSell;
        Product.cat = item.cat;
        pStatus = item.shipped;
        if (item.pSell === 'Showroom A') {
            pShowroomA = true;
            pShowroomB = false;
        }
        if (item.pSell === 'Showroom B') {
            pShowroomB = true;
            pShowroomA = false;
        }
        this.setState({ Product, pStatus, pShowroomA, pShowroomB, eIndex });

    }
    render() {
        let { Product, pStatus, ProductData, pShowroomA, pShowroomB } = this.state;
        return (
            <>
                <div className='row'>
                    <div className="col-md-4">
                        <form onSubmit={this.onSubmit}>
                            <h1>Product Details</h1>
                            <div className="form-group">
                                <label>Product Code</label>
                                <input type="number" className="form-control" name="productcode" value={Product.productcode} onChange={this.onChangeHandler} />
                            </div>
                            <div className="form-group">
                                <label>Product Name</label>
                                <input type="text" className="form-control" name="productname" value={Product.productname} onChange={this.onChangeHandler} />
                            </div>
                            <div className='form-group'>
                                <label>Category</label>
                                <select className="form-control" name='cat' onChange={this.onChangeHandler}>
                                    <option value={Product.cat}>Electronics</option>
                                    <option value={Product.cat}>Sports</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Shipped?</label>
                                <input type="checkbox" className="ml-3" name="shipped" checked={pStatus} onChange={this.onChangeHandler} />
                            </div>
                            <div className="form-group">
                                <label>Sold From: </label>
                                <span className="ml-5">Showroom A</span> <input type="radio" name="pSell" checked={pShowroomA} className="ml-3 pr-3" value="Showroom A" onChange={this.onChangeHandler} />
                                <span className="ml-5">Showroom B</span> : <input type="radio" name="pSell" checked={pShowroomB} className="ml-3 pr-3" value="Showroom B" onChange={this.onChangeHandler} />
                            </div>
                            <div className="form-group">
                                <button type="button" class="btn btn-primary">Submit Data</button>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-8'>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th>Product Code</th>
                                    <th>Product Name</th>
                                    <th>Product Category</th>
                                    <th>Product Shipped?</th>
                                    <th>Product Sold from</th>
                                </tr>
                                {ProductData.map((item, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>{item.productcode}</td>
                                            <td>{item.productname}</td>
                                            <td>{item.cat}</td>
                                            <td><input type="checkbox" checked={item.shipped} onChange={() => { }} /> </td>
                                            <td>{item.pSell}</td>
                                            <td><button className="btn btn-info" onClick={() => this.onEdit(item, idx)}>Edit</button></td>
                                            <td><button className="btn btn-danger" onClick={() => this.onDelete(idx)}>Delete</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default DisplayProduct;