import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// getFeedbackReducer recives and stores state from app.js from the server
const getFeedbackReducer = (state = [], action) => {
    if (action.type === 'SET_FEEDBACK') {
        console.log(`The person was ${action.payload}`);
        state = action.payload;
    }
    return state;
};


// creating store
const storeInstance = createStore(
    combineReducers({
        getFeedbackReducer,
        
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
