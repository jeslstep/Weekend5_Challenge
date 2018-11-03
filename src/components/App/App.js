import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {

// get feedback upon page load
componentDidMount() {
    this.getFeedback();
  }

getFeedback = () => {
// GET feedback from the server
    axios.get('/feedback')
      .then( (response) => {
//dispatching to getFeedbackReducer
        this.props.dispatch( {type: 'SET_FEEDBACK', payload: response.data} );
      })
      .catch( (error) => {
        alert('error in making get request', error);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
      </div>
    );
  }
}

export default connect()(App);
