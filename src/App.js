import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <h1>Simple calculator</h1>
    );
  }
}

export default hot(module)(App);