import React  from 'react';
import axios from 'axios';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from './header/header';
import Home from './home/home';
import Footer from './footer/footer';
import SearchMovie from './searchmovie/search.container';
import store from './store';
import { fetchMovie } from './actions/movies-actions';

export default class Main extends React.Component {
    constructor(props){
      super(props);
      this.state = {
       
      };
    //   this.addSong = this.addSong.bind(this);
    }
    
    componentDidMount() {
      // axios.get('/api/albums')
      //   .then(res => res.data)
      //   .then(albums => this.setState({ albums }));
      // store.dispatch(fetchMovie())
    }
    
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
                <Route exact path="/home" render={() => <SearchMovie /> } />
                {/* <Route path="/lyrics" render={() => <LyricsContainer />}/> */}
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