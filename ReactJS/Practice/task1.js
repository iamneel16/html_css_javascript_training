import React, { Component } from 'react';


class Display5 extends Component {
    constructor() {
        super();
        this.state = { FullName: '', password:'' };
    }
    onSubmitHandler = (e)=>{
        e.preventDefault();
        console.log("onSubmit");
    }
    render() {

        return (
            <>
                <form onSubmit={this.onSubmitHandler}>
                    <div className='form-group'>
                        <label>Full Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className='form-group'>
                        <label>Address</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className='form-group'>
                        <label>Phone</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className='form-group'>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </>
        )
    }
}

export default Display5