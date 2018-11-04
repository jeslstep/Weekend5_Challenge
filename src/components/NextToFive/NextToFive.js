import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class NextToFive extends Component {

  // connects and moves user to page five
   goToNextPage5 = () => {
    this.props.history.push('/topagefive');
  }
  
  
  render() {
    return (
    <div>
      <button onClick={this.goToNextPage5}>NEXT</button>
    </div>
    )
  }
}

export default withRouter(NextToFive);