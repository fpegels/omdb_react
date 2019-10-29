import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import moviesReducer from './reducers/movies-reducer';
import usersReducer from './reducers/users-reducer';
// import playerReducer from './reducers/player-reducer';
import { createLogger } from 'redux-logger'
import  thunkMiddleware from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default createStore(combineReducers({movies: moviesReducer, users: usersReducer}),
                         /* preloadedState, */ 
                         composeEnhancers(applyMiddleware(createLogger(), thunkMiddleware)));