import React from 'react';
import { connect } from 'react-redux';
import HeaderComponent from './header.component'
import { submitLogin, submitToken, submitLogout } from '../actions/users-actions';


class Header extends React.Component {
constructor(props){
    super(props)
    this.state ={}
    this.UsernamechangeHandler = this.UsernamechangeHandler.bind(this)
    this.PasswordchangeHandler = this.PasswordchangeHandler.bind(this)
    this.SubmitLogin = this.SubmitLogin.bind(this)
    this.SubmitLogout = this.SubmitLogout.bind(this)
}

componentDidMount() {
    const credentials = JSON.parse(localStorage.getItem('JWT'));
    // console.log("@@@@", credentials['token'])
    if (credentials) this.props.submitToken(credentials['token'])
  }

UsernamechangeHandler(event){
    this.setState({username: event.target.value})
    // console.log("@@@", this.state['username'])
}
PasswordchangeHandler(event){
    this.setState({password: event.target.value})
    // console.log("@@@", this.state['password'])
}
SubmitLogin(event){
    event.preventDefault();
    // console.log("@@@", this.state['username'])
    this.props.submitLogin({username: this.state['username'], password: this.state['password']})
}
SubmitLogout(event){
    event.preventDefault();
    console.log("@@@", this.state['username'])
    this.props.submitLogout()
}



    render(){
        return <HeaderComponent UsernamechangeHandler={this.UsernamechangeHandler} 
                                PasswordchangeHandler={this.PasswordchangeHandler}
                                SubmitLogin={this.SubmitLogin}
                                user = {this.props.user}
                                SubmitLogout = {this.SubmitLogout}
                                />
    }

}

const mapStateToProps = function(state) {
    return {
        user: state.users.user
    }
  }
  
  const mapDispatchToProps = function (dispatch) {
    return {
      submitLogin: (user) => dispatch(submitLogin(user)),
      submitToken: (token) => dispatch(submitToken(token)),
      submitLogout: () => dispatch(submitLogout())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Header)
