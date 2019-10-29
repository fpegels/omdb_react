import React from 'react';
import { connect } from 'react-redux';
import SearchComponent from './search.component'
import { fetchMovies, addFavorita } from '../actions/movies-actions';


class Search extends React.Component {
constructor(props){
    super(props)
    // this.state ={}
    this.changeHandler = this.changeHandler.bind(this)
    this.searchbyTitle = this.searchbyTitle.bind(this)
    this.addFavorita = this.addFavorita.bind(this)
}

changeHandler(event){
    this.setState({text: event.target.value})
}

searchbyTitle(event){
    event.preventDefault();
    console.log(this.state['text'])
    this.props.fetchMovies(this.state['text'])
}

addFavorita(imdbID){
  // event.preventDefault();
  console.log(imdbID)
  const credentials = JSON.parse(localStorage.getItem('JWT'));
  if (credentials) this.props.addFavorita(credentials['token'], imdbID)
}


// selectMovie(event){
//     console.log(event.target)
//     event.preventDefault();
//     this.props.fetchMovie()


// }

    render(){
        return <SearchComponent movies={this.props.movies}
                                searchbyTitle={this.searchbyTitle}
                                changeHandler={this.changeHandler}
                                addFavorita= {this.addFavorita}/>
    }

}

const mapStateToProps = function(state) {
    return {
      movies: state.movies
    }
  }
  
  const mapDispatchToProps = function (dispatch) {
    return {
      fetchMovies: (text) => dispatch(fetchMovies(text)),
      addFavorita: (token, favorita) => dispatch(addFavorita(token, favorita)), 
 
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Search)

