import React, { Component } from 'react';
import { connect } from 'react-redux';



class AdminPage extends Component {


  render() {
    return (
      <div>
          <h1>Admin Page</h1>
   {/* looping through the feedback from redux */}
        {this.props.reduxState.getFeedbackReducer.map( feedback => (
            <div id="card" key={feedback.id}>
{ /* displaying in table */ }
            <table>
                <thead>
                    <tr>
                    <th>Id</th><th>Feeling</th><th>Understanding</th>
                    <th>Support</th><th>Comments</th><th>Flagged</th>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{feedback.id}</td><td>{feedback.feeling}</td><td>{feedback.understanding}</td>
                    <td>{feedback.support}</td><td>{feedback.comments}</td><td>{feedback.flagged}</td>
                    <td>{feedback.date}</td>
{ /* button to delete corresponding table row*/ }
                    <td><button onClick={() => {this.props.dispatch( 
                      { type: 'DELETE_FEEDBACK', payload: feedback } )} 
                      }>Delete</button></td>
                    </tr>
                </tbody>
            </table>        
            </div>
            ))}
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return {reduxState};
}

export default connect(mapReduxStateToProps)(AdminPage);
