import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class AdminButton extends Component {

  goToNextPage = () => {
    this.props.history.push('/topageadmin');
  }

  render() {
    return (
      <button onClick={this.goToNextPage}>Adimin</button>
    )
  }
}

export default withRouter(AdminButton);