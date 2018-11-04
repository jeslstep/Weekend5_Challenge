import React, { Component } from 'react';
import { connect } from 'react-redux';
import NextToTwo from '../NextToTwo/NextToTwo';


class PageOne extends Component {



  render() {
    return (
        <div>
            <h2>How are you feeling today?</h2>
{ /* user input for feedback question 1 */ }
            <form>
            <input placeholder="rate 1-10" />
             
            </form>
{ /* moves user to page 2*/ }
      <NextToTwo />
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return {
        reduxState
    };
}

export default connect(mapReduxStateToProps)(PageOne);
