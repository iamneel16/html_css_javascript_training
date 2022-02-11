import React, { Component } from 'react';
import axios from 'axios';

let formInitials = {
    id:'',vendorName:'', contact:'',type:'',
}
class UpdateVendor extends Component{
    constructor()
    {
        super();
        this.state = {
            Vendor:{id:'',vendorName:'', contact:'',type:''}, 
            showMessage:'',
            allVendors:[],
            selected: 0,
        }
    }
    // componentDidMount() {
    //     axios.get("http://localhost:4000/employee").then(response => {
    //         console.log(response)
    //         console.log(response.data)
    //         this.setState({ Vendor: response.data })
    componentDidMount(){
        // let Vendor = this.state
        axios.get("http://localhost:4000/vendor").then(response=>{
            //console.log(response.data)
            this.setState({ allVendors: response.data })
            // console.log(allVendors)
        })
    }
    onChangeHandler = (e)=>
    {
        let {name, value }= e.target;
        let {Vendor, allVendors } = this.state;
        if(name==='drop')
        {   
            if(value === 0){
                this.setState({Vendor: {...formInitials}});
            } else {
                let data = allVendors.filter((emp)=>{
                    return emp.id===value
                })
                console.log("Filtered Data", data[0]);
                console.log("Filtered Data", data);
                // this.setState({Vendor:Vendor.id=value})
                // console.log(Vendor)
                this.setState({Vendor:data[0]})
            }
            
        } else{

            this.setState({Vendor:{...Vendor,[name]:value}});
        }
    
    }
    onSubmit = (e)=>
    {
        e.preventDefault();
        const { Vendor } = this.state;
        const URL = "http://localhost:4000/vendor/" + Vendor.id;
        axios.put(URL, this.state.Vendor).then(response=>{
            console.log(response);

            if(response.statusText ==="OK")
            {
                this.setState({showMessage:'Record has been updated'});
            }
        });
    }
    render()
    {
        const { Vendor, showMessage, allVendors } = this.state;
        return(
            <>
               <div>
               <span className="alert-success">{showMessage}</span>
               <form onSubmit={this.onSubmit}>
                <h5>Update Vendor</h5>
                <div className="form-group">
                    <label>Vendor Id</label>
                    <input type="text" className="form-control" name="id" value={Vendor.id} onChange={this.onChangeHandler} />
                </div>
                <div className="form-group">
                    <label>Vendor Name</label>
                    <input type="text" className="form-control" name="vendorName" value={Vendor.vendorName} onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" name="contact" value={Vendor.contact} onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" name="type" value={Vendor.type} onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                  <button type="submit">Submit</button>
                </div>
                <div className='form-group'>
                    <select className='form-select' name='drop' onChange={this.onChangeHandler}>
                        <option value={0}>Select Vendor</option>
                    {allVendors.map((item, idx) => {
                            return (
                                    <option key={idx} value={item.id}>{item.vendorName}</option>  
                            )
                        })}
                    </select>

                    {/* <select className='form-group' name='drop' onChange={this.onChangeHandler}>
                        <option value={0}>Select Vendor</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>

                    </select> */}
                </div>
                </form>
               </div>
            </>
        )
    }

}

export default UpdateVendor;