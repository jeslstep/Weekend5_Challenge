import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import AdminButton from '../AdminButton/AdminButton';
import TextField from '@material-ui/core/TextField';
import {withRouter} from 'react-router-dom';


class PageOne extends Component {

// Local state to store first feedback input
  state = feelingRating;

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
      this.props.dispatch( { type: 'ADD_FEEDBACK', payload: this.state } )
      this.clearField();
// Moves user to the next
      this.props.history.push('/2/topagetwo');
   }

// Clears the feild
    clearField = () => {
        this.setState(feelingRating);
    }


  render() {
    return (
        <div>
       <AdminButton /> 
        <h2>How are you feeling today?</h2>
{ /* user input for feedback question 1 */ }
    <form onSubmit={this.handleSubmit}>
        <TextField
          id="standard-name"
          label="Rate Feeling of 1-10"
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

export default withRouter(connect(mapReduxStateToProps)(PageOne));
