import React, { Component } from 'react';
import { connect } from 'react-redux';


class PageFive extends Component {



  render() {
    return (
        <div>
            <h2>Thank you for your feedback!</h2>
{ /* btn brings user back to page 1, allowing the user to give new feedback */ }
          <button>Leave New Feedback</button>
      </div>
    );
  }
}

export default connect()(PageFive);
