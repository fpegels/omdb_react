import React  from 'react';
import axios from 'axios';
import { Route, Redirect, Switch } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import Home from './home/home';

export default class Main extends React.Component {
    constructor(props){
      super(props);
      this.state = {
       
      };
    //   this.addSong = this.addSong.bind(this);
    }
    
    // componentDidMount() {
    //   axios.get('/api/albums')
    //     .then(res => res.data)
    //     .then(albums => this.setState({ albums }));
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
          <Sidebar /*playlists={playlists}*/ />
          <div className="col-xs-10">
            <Switch>
                <Route exact path="/home" render={() => <Home /> } />
                {/* <Route path="/lyrics" render={() => <LyricsContainer />}/> */}
              <Redirect from="/" to="/home" />
            </Switch>
          </div>
          {/* <Player 
            currentSong={currentSong}
          /> */}
        </div>
      );
    }
  };