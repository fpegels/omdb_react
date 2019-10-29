import React  from 'react';
import axios from 'axios';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from './header/header.container';
import Footer from './footer/footer';
import Home from './home/home.component'
import SearchMovie from './searchmovie/search.container'
import MovieDetail from './moviedetail/moviedetail.container'
import Signup from './signup/signup.container'
import Favoritas from './favoritas/favoritas.container'
import Allusers from './allusers/allusers.container'


export default class Main extends React.Component {
    constructor(props){
      super(props);
      this.state = {
       
      };
    //   this.addSong = this.addSong.bind(this);
    }
    
    // componentDidMount() {
    //   // axios.get('/api/albums')
    //   //   .then(res => res.data)
    //   //   .then(albums => this.setState({ albums }));
    //   // store.dispatch(fetchMovie())
    // }
    
    // selectAlbum(albumId) {
    //   axios.get(`/api/albums/${albumId}`)
    //     .then(res => res.data)
    //     .then(serverAlbum => this.setState({ selectedAlbum: serverAlbum }));
    // }
  
    render() {
    //   const  {
    //     albums,
    //   } = this.state;
      return (
        <div id="main" className="container-fluid">
          <Header /*playlists={playlists}*/ />
          <div className="col-xs-10">
            <Switch>
                <Route exact path="/home" render={() => <Home /> } />
                <Route exact path="/searchmovies" render={() => <SearchMovie /> } />
                <Route exact path="/moviedetail/:id" render={({ match }) => <MovieDetail imdbID={match.params.id}/> } />
                <Route exact path="/signup" render={() => <Signup /> } />
                <Route exact path="/favoritas" render={() => <Favoritas /> } />
                <Route exact path="/allusers" render={() => <Allusers /> } />
              <Redirect from="/" to="/home" />
            </Switch>
          </div>
          <Footer /*playlists={playlists}*/ />
          {/* <Player 
            currentSong={currentSong}
          /> */}
        </div>
      );
    }
  };