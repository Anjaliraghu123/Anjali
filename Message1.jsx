import React, { Component } from 'react'

export class Message1 extends Component {
    msg="Hello"
    updateHandler(){
        console.log("Hello, updateHandler is invoking")
    }
  render() {
    return (
      <div>
        <h2>Message Component</h2>

        <h3>Message Valu:{this.msg}</h3>
        <button onclick={this.updateHandler()}>GM</button>
      </div>
    )
  }
}

export default Message1