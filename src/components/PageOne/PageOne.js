import React, { Component } from 'react';
import { connect } from 'react-redux';
import NextToTwo from '../NextToTwo/NextToTwo';

class PageOne extends Component {



  render() {
    return (
        <div>
            <form>
      
       
            </form>
      <NextToTwo />
      </div>
    );
  }
}

export default connect()(PageOne);
