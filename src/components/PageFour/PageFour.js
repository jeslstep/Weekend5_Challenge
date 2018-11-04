import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {withRouter} from 'react-router-dom';


class PageTwo extends Component {

// Local state to store first feedback input
  state = supportRating;

// Sets local state 
   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value,
      });
      this.handleSubmit();
   }

   handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
// Dispatching to addFeedbackReducer
      this.props.dispatch( { type: 'ADD__Feedback', payload: this.state } )
      this.clearField();
// Moves user to the next
      this.props.history.push('/5/topagefive');
   }

// Clears the feild
    clearField = () => {
        this.setState(comments);
    }


  render() {
    return (
        <div>
        <h2>Any comments you wish to leave?</h2>
{ /* user input for feedback question 2 */ }
    <form onSubmit={this.handleSubmit}>
        <TextField
          id="standard-name"
          label = "Comments"
          value={feelingRating}
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
