import React, { Component } from 'react';
import './App.css';
import Content from '../Content/Content.js';
import Support from '../Support/Support.js';
import Comments from '../Comments/Comments.js';
import Thanks from '../Thanks/Thanks.js';
import Admin from '../Admin/Admin.js';
import axios from 'axios';
import {HashRouter as Router, Route, Link} from "react-router-dom";
import { connect } from 'react-redux';
class App extends Component {
  render() {
    return (
      <Router> 
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
         {/* Temp navbar for dev mode, will be replaced by series of next buttons */}
         <ul>
          <li><Link to='/content'>Content</Link></li>
          <li><Link to='/support'>Support</Link></li>
          <li><Link to='/comments'>Comments</Link></li>
          <li><Link to='/thanks'>Thank You!</Link></li>
          <li><Link to='/admin'>Admin</Link></li>
          </ul>
          <Route exact path='/content' component={Content}/>
          <Route exact path='/support' component={Support}/>
          <Route exact path='/comments' component={Comments}/>
          <Route exact path='/thanks' component={Thanks}/>
          <Route exact path='/admin' component={Admin}/>
        <br/>
      </div>
      </Router>
    );
  }
}


const mapStateToProps = state => ({
  feedback: state.feedback

})

export default connect(mapStateToProps)(App);
