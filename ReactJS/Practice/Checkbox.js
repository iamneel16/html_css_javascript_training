import React,{Component} from 'react'
class Check extends Component{
    constructor(){
        super()
        this.state = {boxcheck:false}
    }
    onCheck=()=>{
        let {boxcheck} = this.state
        this.setState({boxcheck:!boxcheck})
    }
    render(){
        return(
            <div>
                <input type="checkbox" checked={this.state.boxcheck}/>
                <p>        </p>
                <button type="button" class="btn btn-primary" onClick={this.onCheck}>Check Mark</button>
            </div>
        )
    }
}
export default Check;