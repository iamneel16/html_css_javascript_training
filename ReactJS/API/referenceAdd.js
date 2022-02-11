import React, { Component } from 'react';
import axios from 'axios';
class AddVendor extends Component{
    constructor()
    {
        super();
        this.state = {Vendor:{id:'',vendorName:'', contact:'',type:''}, showMessage:''}
    }
    onChangeHandler = (e)=>
    {
        let {name, value, checked }= e.target;
        let { Vendor } = this.state;
        console.log(checked)
        if(name==='type')
        {
            value=checked.toString()
        }
        this.setState({Vendor:{...Vendor,[name]:value}});
        // console.log("Vendor",Vendor)
    }
    onSubmit = (e)=>
    {
        // console.log(this.state.Vendor)
        e.preventDefault();
        const URL = "http://localhost:5000/Vendor";
        axios.post(URL, this.state.Vendor).then(response=>{
            console.log(response);
            if(response.statusText ==="Created")
            {
                this.setState({showMessage:'Insertion Completed Successfully '});
            }
        });
    }
    render()
    {
        let { Vendor, showMessage } = this.state;
        return(
            <>
               <div>
               <span className="alert-success">{showMessage}</span>
               <form onSubmit={this.onSubmit}>
                <h5>Add Vendor</h5>
                <div className="form-group">
                    <label>Vendor Id</label>
                    <input type="text" className="form-control" name="id" value={Vendor.id} onChange={this.onChangeHandler} />
                </div>
                <div className="form-group">
                    <label>Vendor Name</label>
                    <input type="text" className="form-control" name="vendorName" value={Vendor.vendorName} onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label>Contact</label>
                    <input type="text" className="form-control" name="contact" value={Vendor.contact} onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label>Type</label>
                    <input type="checkbox" name="type" onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                  <button type="submit">Submit</button>
                </div>
                </form>
               </div>
            </>
        )
    }

}

export default AddVendor;