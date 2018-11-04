import React, { Component } from 'react';
import { connect } from 'react-redux';
import NextToFive from '../NextToFive/NextToFive';

class PageFour extends Component {



  render() {
    return (
        <div>
            <h2>Any comments you'd like to leave?</h2>
{ /* user input for feedback question 4 */ }
            <form>
                <input />
            </form>
{ /* moves user to page five*/ }
      <NextToFive />
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return {reduxState};
}

export default connect(mapReduxStateToProps)(PageFour);
