import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {withRouter} from 'react-router-dom';

// declare object to hold comments feedback
const emptyCommments = {
  comments: '',
};

class PageTwo extends Component {

  // POST request addFeedback sends feedback to server, called on PageFour
  addFeedback = (event) => {
      let feedback = [...this.props.reduxState.addFeedbackReducer, this.state.feeling, 
        this.state.understanding, this.state.support, this.state.comments]
     axios({
       method: 'POST',
       url: '/feedback',
       data: feedback
     }).then(response => {
       this.getFeedback();
      //  this.props.dispatch({
      //    type: 'CLEAR_STATE'
      //  });
     }).catch(error => {
       alert('Error', error);
     })
   }

// Local state to store first feedback input
  state = emptyCommments;

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
// uses the addFeedback post request function in App.js to send feedback to server
      this.addFeedback();
// Moves user to the next
      this.props.history.push('/5');
   }

// Clears the feild
    clearField = () => {
        this.setState(emptyCommments);
    }


  render() {
    return (
        <div>
        <h2>Any comments you wish to leave?</h2>
{ /* user input for feedback question 2 */ }
    <form onSubmit={this.handleSubmit}>
        <TextField
          id="standard-name"
          label= "Comments"
          // value={this.state.comments}
          onChange={this.handleChange}
          margin="normal"
        /> 
{ /* moves user to the next page, dispathes comments feedback, posts to server*/ }
       <Button varient="contained" color="primary" type="submit">Submit Feedback</Button>
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
