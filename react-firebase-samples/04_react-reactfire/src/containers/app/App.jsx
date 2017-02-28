import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import * as reactfire from 'reactfire';
import reactMixin  from 'react-mixin';

class App extends Component {

  constructor(){
    super();
    this.state = {
      user : {
        name:"",
        age:0
      }
    }
  }

  componentDidMount(){
    const rootRef = firebase.database().ref().child("users/first");
    this.bindAsObject(rootRef,"user");
  }

  render() {
    return (
      <div className="App">
        {this.state.user.name}<br/>        
      </div>
    );
  }
}
reactMixin(App.prototype, reactfire);
export default App;
