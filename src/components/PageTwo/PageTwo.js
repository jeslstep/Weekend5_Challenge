import React, { Component } from 'react';
import { connect } from 'react-redux';
import NextToThree from '../NextToTwo/NextToTwo';

class PageTwo extends Component {



  render() {
    return (
        <div>
            <h2>How well are you understanding the content?</h2>
{ /* user input for feedback question 2 */ }
            <form>
                <input />
            </form>
{/* moves user to page 3 */}
      <NextToThree />
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return {
        reduxState
    };
}

export default connect(mapReduxStateToProps)(PageTwo);
