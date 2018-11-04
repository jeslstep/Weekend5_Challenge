import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {withRouter} from 'react-router-dom';


class PageTwo extends Component {

// Local state to store first feedback input
  state = '';

// Sets local state 
   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value,
      });
   }

   handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
// Dispatching to addFeedbackReducer
      this.props.dispatch( { type: 'ADD__Feedback', payload: this.state } )
      this.clearField();
// Moves user to the next
      this.props.history.push('/3/topagethree');
   }

// Clears the feild
    clearField = () => {
        this.setState('');
    }


  render() {
    return (
        <div>
        <h2>How welling are you understanding the content?</h2>
{ /* user input for feedback question 2 */ }
    <form onSubmit={this.handleSubmit}>
        <TextField
          id="standard-name"
          label="Rate Understanding of 1-10"
          value={this.state}
          onChange={this.props.handleChange(feedback)}
          margin="normal"
        /> 
{ /* moves user to page and dispathes rating 2*/ }
       <Button varient="contained" color="primary" type="submit">NEXT</Button>
     </form>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return {
        reduxState
    };
}

export default withRouter(connect(mapReduxStateToProps)(PageTwo));
