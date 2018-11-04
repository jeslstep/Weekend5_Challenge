import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class NexttoTwo extends Component {

 // connects and moves user to page two
  goToNextPage2 = () => {
    this.props.history.push('/topagetwo');
  }

  render() {
    return (
      <button onClick={this.goToNextPage2}>NEXT</button>
    )
  }
}

export default withRouter(NexttoTwo);