import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class AdminButton extends Component {

  goToNextPageSix = () => {
    this.props.history.push('/6');
  }

  render() {
    return (
      <button onClick={this.goToNextPageSix}>Adimin</button>
    )
  }
}

export default withRouter(AdminButton);