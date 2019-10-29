import React from 'react';
import { connect } from 'react-redux';
import SignupComponent from './signup.component'
import { submitRegistration } from '../actions/users-actions';


class Signup extends React.Component {
constructor(props){
    super(props)
    // this.state ={}
    this.UsernamechangeHandler = this.UsernamechangeHandler.bind(this)
    this.PasswordchangeHandler = this.PasswordchangeHandler.bind(this)
    this.SubmitRegistration = this.SubmitRegistration.bind(this)
}

UsernamechangeHandler(event){
    this.setState({username: event.target.value})
}
PasswordchangeHandler(event){
    this.setState({password: event.target.value})
}
SubmitRegistration(event){
    event.preventDefault();
    console.log("@@@", this.state)
    this.props.submitRegistration({username: this.state['username'], password: this.state['password']})
}


    render(){
        return <SignupComponent UsernamechangeHandler={this.UsernamechangeHandler}
                                PasswordchangeHandler={this.PasswordchangeHandler}
                                SubmitRegistration={this.SubmitRegistration}
                                username_temp = {this.props.username_temp}
                                />
    }

}

const mapStateToProps = function(state) {
    return {
        username_temp: state.users.username_temp
    }
  }
  
  const mapDispatchToProps = function (dispatch) {
    return {
      submitRegistration: (newuser) => dispatch(submitRegistration(newuser))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Signup)

