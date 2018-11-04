import React, { Component } from 'react';
import { connect } from 'react-redux';
import NextToFour from '../NextToFour/NextToFour';

class PageThree extends Component {



  render() {
    return (
        <div>
            <h2>How well are you being supported?</h2>
{ /* user input for feedback question 3 */ }
            <form>
                <input />
            </form>
{ /* moves user to page 4 */ }
      <NextToFour />
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return {
        reduxState
    };
}

export default connect(mapReduxStateToProps)(PageThree);
