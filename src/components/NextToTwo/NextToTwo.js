import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class NextButton extends Component {

  goToNextPage = () => {
    this.props.history.push('/pagetwo');
  }

  render() {
    return (
      <button onClick={this.goToNextPage}>NEXT</button>
    )
  }
}

export default withRouter(NextButton);