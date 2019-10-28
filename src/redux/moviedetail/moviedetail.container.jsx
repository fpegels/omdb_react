import React from 'react';
import { connect } from 'react-redux';
import MovieDetailComponent from './moviedetail.component'
import { fetchMovie } from '../actions/movies-actions';


class MovieDetail extends React.Component {
constructor(props){
    super(props)
 this.state = {
    imdbID: props.imdbID
 }
    // this.searchbyTitle = this.searchbyTitle.bind(this)
    // this.changeHandler = this.changeHandler.bind(this)
}


// searchbyTitle(event){
//     event.preventDefault();
//     console.log(this.state['text'])
//     this.props.fetchMovies(this.state['text'])
// }

// changeHandler(event){
//     this.setState({text: event.target.value})
// }


componentDidMount() {
    this.props.fetchMovie(this.state['imdbID'])
    console.log("@@@@",this.state['imdbID'])
  }

    render(){
        return <MovieDetailComponent movie={this.props.movie}/>
    }

}

const mapStateToProps = function(state) {
    return {
      movie: state.movies.movie
    }
  }


const mapDispatchToProps = function (dispatch) {
    return {
      fetchMovie: (text) => dispatch(fetchMovie(text))
    }
  }
  

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetail)
