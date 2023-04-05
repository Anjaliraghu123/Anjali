import React, { Component } from 'react'

export class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
        }
    }
    emailHandler=(event)=>{
        console.log(event.target)
        console.log(event.target.valu)
        this.setState({email:event.target.valu})


    }
    passwordHandler=(event)=>{
        this.setState({password:event.target.valu})

    }
    submitHandler=(event)=>{
      event.preventDefault();
      console.log(this.state)
    }
  render() {
    return (
      <div>
        <h2>Login Details</h2>
        <pre>{JSON.stringify(this.state)}</pre>
        <form>
        <div>
            <label>Email Id:</label>
            <input type="text"onChange={this.emaliHandler}/>
        </div>
        <div>
            <label>Password</label>
            <input type="text"onChange={this.passwordHandler}/>

        </div>
        <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Login