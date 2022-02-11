import React,{Component} from 'react'
class Text extends Component{
    constructor(){
        super()
        this.state={text:'This Text Is My Orignal Text'}
    }

    onChange=()=>{
        this.setState({text:'The Text is Updated using onChange'})
    }
    onDelete=()=>{
        this.setState({text:""})
    }

    render(){
        return(
            <div>
                <h1>{this.state.text}</h1>
                <button type="button" class="btn btn-primary" onClick={this.onChange}>Change Text</button>
                <button type="button" class="btn btn-primary" onClick={this.onDelete}>Remove Text</button>

            </div>
        )
    }
}
export default Text;