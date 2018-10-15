import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {HashRouter as Router, Route, Link} from "react-router-dom";
import { connect } from 'react-redux';
import Form from '../Form/Form';

class App extends Component {

  render() {
    return (
      <Router>
         {/* // Home  */}
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
          {/* // First Route */}
          <Route exact path="/" render={() => (
            <Form
              title="How are you feeling today?"
              category="feeling"
              nextUrl="/2"
            />)}
          />
            {/* // Second Route */}
          <Route exact path="/2" render={() => (
            <Form
              title="How well are you understanding the content?"
              category="understanding"
              nextUrl="/3"
            />)}
          />
              {/* // Third Route */}
          <Route exact path="/3" render={() => (
            <Form
              title="How well are you being supported?"
              category="support"
              nextUrl="/4"
            />)}
          />
           {/* // Fourth Route */}
          <Route exact path="/4" render={() => (
            <Form
              title="Any comments you want to leave?"
              category="comment"
              nextUrl="/5"
              isLastQuestion={true}
            />)}
          />
            {/* // Fifth Route */}
          <Route exact path="/5" render={() => (
            <Form
              title="Success!!!, Click next to submit your feedback."
              nextUrl="/"
            />)}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(App);
