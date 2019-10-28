import React from 'react';
import { connect } from 'react-redux';
import SearchComponent from './search.component'
import { fetchMovie } from '../actions/movies-actions';


class Search extends React.Component {
constructor(props){
    super(props)
    this.state ={

    }
    this.searchbyTitle = this.searchbyTitle.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
}

searchbyTitle(event){
    this.props.fetchMovie(this.state['text'])
}

changeHandler(event){
    this.setState({text: event.target.value})
}


    render(){
        return <SearchComponent movie={this.props.movie} searchbyTitle={this.searchbyTitle} changeHandler={this.changeHandler}/>
    }

}

const mapStateToProps = function(state) {
    return {
      movie: state.movie
    }
  }
  
  const mapDispatchToProps = function (dispatch) {
    return {
      fetchMovie: (text) => dispatch(fetchMovie(text))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Search)

