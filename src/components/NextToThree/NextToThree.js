import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class NextToThree extends Component {

   // connects and moves user to page three
   goToNextPage3 = () => {
       this.props.history.push('/topagethree');
   }

  render() {
    return (
    <div>
      <button onClick={this.goToNextPage3}>NEXT</button>
    </div>
    )
  }
}

export default withRouter(NextToThree);