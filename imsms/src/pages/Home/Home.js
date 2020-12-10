import React, {Component} from 'react'

export default class Home extends Component{
    toApp(){
        this.props.history.push("/User")
    }
    render(){
        return(
            <div>
                this is home.
                <button onClick={()=>this.toApp()}>go to user</button>
            </div>
        )
    }
}