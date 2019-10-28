import React from 'react';
import ReactDOM from 'react-dom';
// import Inbox from './components/Inbox';
// import NewMessageForm from './components/NewMessageForm';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'
import Main from './redux/Main'

/* Para que puedas visualizar todo, vas a necesitar darle data similar a cada componente que cada test le da al componente */

ReactDOM.render(
    <Provider store={store}>
        <Router>
        {/* <div>
            <Link to="/inbox">
                <button>Inbox</button>
            </Link>
            <Link to="/newMessage">
                <button>New Message</button>
            </Link>
        </div>
        <Route path="/inbox" component={Inbox} />
        <Route path="/newMessage" component={NewMessageForm} /> */}
        <Route path="/" component={Main} />
    </Router>
  </Provider>,
  document.getElementById('app')
);