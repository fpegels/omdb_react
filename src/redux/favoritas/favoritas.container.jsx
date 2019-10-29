import React from 'react';
import { connect } from 'react-redux';
import FavoritasComponent from './favoritas.component'
import { fetchFavoritas, removeFavorita } from '../actions/movies-actions';


class Favoritas extends React.Component {
constructor(props){
    super(props)
    // this.state ={}
    this.removeFavorita = this.removeFavorita.bind(this)
    // this.searchbyTitle = this.searchbyTitle.bind(this)
    // this.selectMovie = this.selectMovie.bind(this)
}
componentDidMount() {
    const credentials = JSON.parse(localStorage.getItem('JWT'));
    console.log("credentials", credentials)
    if (credentials) this.props.fetchFavoritas(credentials['token'])
  }

// changeHandler(event){
//     this.setState({text: event.target.value})
// }

// searchbyTitle(event){
//     event.preventDefault();
//     console.log(this.state['text'])
//     this.props.fetchMovies(this.state['text'])
// }


removeFavorita(imdbID){
  // event.preventDefault();
  console.log(imdbID)
  const credentials = JSON.parse(localStorage.getItem('JWT'));
  if (credentials) this.props.removeFavorita(credentials['token'], imdbID)
}

    render(){
        return <FavoritasComponent favoritas={this.props.favoritas}
                                   removeFavorita={this.removeFavorita}/>
    }

}

const mapStateToProps = function(state) {
    return {
      favoritas: state.movies.favoritas
    }
  }
  
  const mapDispatchToProps = function (dispatch) {
    return {
        fetchFavoritas: (token) => dispatch(fetchFavoritas(token)),
        removeFavorita: (token, favorita) => dispatch(removeFavorita(token, favorita))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Favoritas)
