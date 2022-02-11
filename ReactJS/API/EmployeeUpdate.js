import React, { Component } from 'react';
import axios from 'axios';
let formInitials = {
    id:'',employeeName:'', address:'',city:'',
}
class UpdateEmployee extends Component{
    constructor()
    {
        super();
        this.state = {
            Employee:{id:'',employeeName:'', address:'',city:''}, 
            showMessage:'',
            allEmployees:[],
            selected: 0,
        }
    }
    // componentDidMount() {
    //     axios.get("http://localhost:4000/employee").then(response => {
    //         console.log(response)
    //         console.log(response.data)
    //         this.setState({ Employee: response.data })
    componentDidMount(){
        // let Employee = this.state
        axios.get("http://localhost:4000/employee").then(response=>{
            //console.log(response.data)
            this.setState({ allEmployees: response.data })
            // console.log(allEmployees)
        })
    }
    onChangeHandler = (e)=>
    {
        let {name, value }= e.target;
        let {Employee, allEmployees } = this.state;
        if(name==='drop')
        {   
            if(value == 0){
                this.setState({Employee: {...formInitials}});
            } else {
                let data = allEmployees.filter((emp)=>{
                    return emp.id===value
                })
                console.log("Filtered Data", data[0]);
                console.log("Filtered Data", data);
                // this.setState({Employee:Employee.id=value})
                // console.log(Employee)
                this.setState({Employee:data[0]})
            }
            
        } else{

            this.setState({Employee:{...Employee,[name]:value}});
        }
    
    }
    onSubmit = (e)=>
    {
        e.preventDefault();
        const { Employee } = this.state;
        const URL = "http://localhost:4000/employee/" + Employee.id;
        axios.put(URL, this.state.Employee).then(response=>{
            console.log(response);

            if(response.statusText ==="OK")
            {
                this.setState({showMessage:'Record has been updated'});
            }
        });
    }
    render()
    {
        const { Employee, showMessage, allEmployees } = this.state;
        return(
            <>
               <div>
               <span className="alert-success">{showMessage}</span>
               <form onSubmit={this.onSubmit}>
                <h5>Update Employee</h5>
                <div className="form-group">
                    <label>Employee Id</label>
                    <input type="text" className="form-control" name="id" value={Employee.id} onChange={this.onChangeHandler} />
                </div>
                <div className="form-group">
                    <label>Employee Name</label>
                    <input type="text" className="form-control" name="employeeName" value={Employee.employeeName} onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" name="address" value={Employee.address} onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" name="city" value={Employee.city} onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                  <button type="submit">Submit</button>
                </div>
                <div className='form-group'>
                    <select className='form-select' name='drop' onChange={this.onChangeHandler}>
                        <option value={0}>Select Employee</option>
                    {allEmployees.map((item, idx) => {
                            return (
                                    <option key={idx} value={item.id}>{item.employeeName}</option>  
                            )
                        })}
                    </select>

                    {/* <select className='form-group' name='drop' onChange={this.onChangeHandler}>
                        <option value={0}>Select Employee</option>
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

export default UpdateEmployee;