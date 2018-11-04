import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class NextToFour extends Component {


// connects and moves user to page four
  goToNextPage4 = () => {
    this.props.history.push('/topagefour');
  }

 
  render() {
    return (
    <div>
      <button onClick={this.goToNextPage4}>NEXT</button>
    </div>
    )
  }
}

export default withRouter(NextToFour);