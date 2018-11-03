import React, { Component } from 'react';
import { connect } from 'react-redux';
import NextToTwo from '../NextToTwo/NextToTwo';

class PageOne extends Component {



  render() {
    return (
        <div>
            <h2>How are you feeling today?</h2>
            <form>
      
       
            </form>
      <NextToTwo />
      </div>
    );
  }
}

export default connect()(PageOne);
