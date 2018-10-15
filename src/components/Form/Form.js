import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class FormCard extends Component {
// Set local state for rating
  state = {
    rating: '',
  }

// Async function for action type 'UPDATE_ANSWERS_
  updateAnswers = property => async event => {
    await this.props.dispatch({
      type: 'UPDATE_ANSWERS',
      payload: {
        ...this.state,
        propertyName: property,
      }
    });
    this.props.history.push(this.props.nextUrl);
    console.log(this.props.reduxState);
  } // End updateAnswers

  // handleChange for rating
  handleChange = event => {
    this.setState({
      rating: event.target.value,
    });
  } // End handleChange

  render() {
    return (
        <div>
            <label>
              {this.props.title}
              <input type="text" value={this.state.rating} onChange={this.handleChange} />
            </label>
            <button 
              
            onClick={this.updateAnswers(this.props.category)}> Next
            
            </button>
        </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(withRouter(FormCard));
