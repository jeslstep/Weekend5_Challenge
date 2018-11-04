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
        console.log(`The currently stored feedback is ${action.payload}`);
        state = action.payload;
    }
    return state;
};

// addFeedbackReducer adds and deletes 
const addFeedbackReducer = (state = [], action) => {
// recives and stores state from page components one-four via dispatch
    if (action.type === 'ADD_FEEDBACK') {
        console.log(`The feedback sumbitted was ${action.payload}`);
         state = [...state, action.payload];
// recives feedback to delete and removes it via dispatch
    } else if ( action.type === 'DELETE_FEEDBACK' ) {
    console.log('The feedback deleted was', state, action.payload);
    const feedbackToDelete = action.payload;
    const matchFeedback = feedback => feedback.idNumber !== feedbackToDelete.idNumber;
    state = state.filter(matchFeedback);
  }
    return state;
};


// creating store
const storeInstance = createStore(
    combineReducers({
        getFeedbackReducer,
        addFeedbackReducer
        
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
