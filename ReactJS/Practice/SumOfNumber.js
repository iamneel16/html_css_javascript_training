import React,{Component} from 'react'
class Sum extends Component{
    constructor(){
        super()
        this.state={Total:0}
    }
    onSum=(e)=>{
        let {Total} = this.state
        Total = Total + e
        this.setState({Total})

    }
    render(){
        return(
            <div>
                <h1>Total:{this.state.Total}</h1>
                <button type="button" className="btn btn-danger" onClick={()=>this.onSum(10)}>10</button><br/><br/>
                <button type="button" className="btn btn-danger" onClick={()=>this.onSum(20)}>20</button><br/><br/>
                <button type="button" className="btn btn-danger" onClick={()=>this.onSum(30)}>30</button><br/><br/>
                <button type="button" className="btn btn-danger" onClick={()=>this.onSum(40)}>40</button><br/><br/>
                <button type="button" className="btn btn-danger" onClick={()=>this.onSum(50)}>50</button><br/><br/>
            </div>
        )
    }
}
export default Sum;