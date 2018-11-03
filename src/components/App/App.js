import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route} from 'react-router-dom';
import PageOne from '../PageOne/PageOne';

class App extends Component {

// get feedback upon page load
componentDidMount() {
    this.getFeedback();
  }

// GET feedback from the server
getFeedback = () => {
    axios.get('/feedback')
      .then( (response) => {
// dispatching to getFeedbackReducer
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
         <Router>
        <div className="App">
          <Route exact path="/" component={PageOne} />
        </div>
      </Router>
        
        <br/>
      </div>
    );
  }
}const mapReduxStateToProps = (reduxState) => {
  return {reduxState};
}



export default connect(mapReduxStateToProps)(App);
