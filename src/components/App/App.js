import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import PageThree from '../PageThree/PageThree';
import PageFour from '../PageFour/PageFour';
import PageFive from '../PageFive/PageFive'
import AdminPage from '../AdminPage/AdminPage';
import { HashRouter as Router, Route} from 'react-router-dom';

class App extends Component {

// get feedback upon page load
componentDidMount() {
    this.getFeedback();
  }

// GET feedback from the server
getFeedback = () => {
    axios.get('/feedback')
      .then( (response) => {
        console.log(response.data);      
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
        <div>
          <Route exact path="/" component={PageOne} />
          <Route path="/topagetwo" component={PageTwo} />
          <Route path="/topagethree" component={PageThree} />
          <Route path="/topagefour" component={PageFour} />
          <Route path="/topagefive" component={PageFive} />
          <Route path="/topageadmin" component={AdminPage} />
        </div>
      </Router> 
      </div>
    );
  }
}const mapReduxStateToProps = (reduxState) => {
  return {reduxState};
}



export default connect(mapReduxStateToProps)(App);
