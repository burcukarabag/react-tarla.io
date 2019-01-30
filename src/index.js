import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { compose, applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import usersReducer from './reducers/usersReducer';
import postsReducer from './reducers/postsReducer';

const rootReducer = combineReducers({

	posts: postsReducer,
	users: usersReducer

});

const allEnhancers = compose(

	applyMiddleware(thunk), 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

const store = createStore(rootReducer, {
		posts: [],

		users: []
	},

	allEnhancers 

);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();













