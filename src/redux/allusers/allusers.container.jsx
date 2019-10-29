import React from 'react';
import { connect } from 'react-redux';
import AllusersComponent from './allusers.component'
import { fetchAllUsers } from '../actions/users-actions';


class Allusers extends React.Component {
constructor(props){
    super(props)
    // this.state ={}
    // this.removeFavorita = this.removeFavorita.bind(this)
    // this.searchbyTitle = this.searchbyTitle.bind(this)
    // this.selectMovie = this.selectMovie.bind(this)
}
componentDidMount() {
    const credentials = JSON.parse(localStorage.getItem('JWT'));
    if (credentials) this.props.fetchAllUsers(credentials['token'])
  }

// changeHandler(event){
//     this.setState({text: event.target.value})
// }

// searchbyTitle(event){
//     event.preventDefault();
//     console.log(this.state['text'])
//     this.props.fetchMovies(this.state['text'])
// }


    render(){
        return <AllusersComponent allusers={this.props.allusers}/>
    }

}

const mapStateToProps = function(state) {
    return {
      allusers: state.users.allusers
    }
  }
  
  const mapDispatchToProps = function (dispatch) {
    return {
        fetchAllUsers: (token) => dispatch(fetchAllUsers(token))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Allusers)