import React, { Component } from 'react'

export class Message2 extends Component {
   msg="Hello"
   gmHandler=()=>{
    this.msg="Hello, GM Rahul Gandhi"
    this.forceUpdate()
   }
   gnHandler=()=>{
    this.msg="Hello,GN Rahul Gandhi"
    this.forceUpdate()
   }
    render() {
    return (
      <div>
        <h4>Message component</h4>
        <h1>Messaeg Valu:{this.msg}</h1>
        <button onclick={this.gmHandler}>GM</button>
        <button onclick={this.gnHandler}>GN</button>
        </div>
    )
  }
}

export default Message2