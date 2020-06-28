import React, { Component } from 'react'
import {connect} from 'react-redux'
import {emailAction} from '../Components/Actions/action'


 class App extends Component {
   state ={
     email:''
   }
   handleSubmit = (e) => {
    e.preventDefault()
   this.props.emailAction(this.state.email)
  
}
onChangeHandler = (e) => {
  this.setState({...this.state,email:e.target.value})
}
  render() {   
    return (
      <div>
        {this.props.email}
        <form onSubmit={this.handleSubmit}>
        <input name ='email' type="email" value={this.state.email} onChange={(e) => this.onChangeHandler(e)} placeholder="enter your email" className="emailInput"/>
        <input type='submit' value='submit'/>
        </form>
      </div>
    )
  }
};
function mapStateToProps(state){
  return{
    email:state.appState.email
  }
}
export default connect(mapStateToProps,{emailAction}) (App)