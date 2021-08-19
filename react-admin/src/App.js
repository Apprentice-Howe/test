import React from 'react'

import { withRouter } from 'react-router-dom'
import MySider from "./component/mySider";

import './App.css';

function App() {
  return (
    <div className="App">
      <MySider/>
    </div>
  );
}

export default withRouter(App);
