import React from 'react';
import { connect } from 'react-redux';
import SearchComponent from './search.component'
import { fetchMovies } from '../actions/movies-actions';


class Search extends React.Component {
constructor(props){
    super(props)
    // this.state ={}
    this.changeHandler = this.changeHandler.bind(this)
    this.searchbyTitle = this.searchbyTitle.bind(this)
    // this.selectMovie = this.selectMovie.bind(this)
}

changeHandler(event){
    this.setState({text: event.target.value})
}

searchbyTitle(event){
    event.preventDefault();
    console.log(this.state['text'])
    this.props.fetchMovies(this.state['text'])
}


// selectMovie(event){
//     console.log(event.target)
//     event.preventDefault();
//     this.props.fetchMovie()


// }

    render(){
        return <SearchComponent movies={this.props.movies} searchbyTitle={this.searchbyTitle} changeHandler={this.changeHandler} /*selectMovie={this.selectMovie}*//>
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
    //   fetchMovie: (text) => dispatch(fetchMovie(text))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Search)

