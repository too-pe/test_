import React, { Component } from 'react'

export default class User extends Component {
    toHome(){
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                this is user.
                <button onClick={()=>this.toHome}>go to home</button>
            </div>
        )
    }
}
