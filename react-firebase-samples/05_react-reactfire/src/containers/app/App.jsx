import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import * as reactfire from 'reactfire';
import reactMixin  from 'react-mixin';

class App extends Component {

  constructor(){
    super();
    this.state = {
      users : []
    }
  }

  componentDidMount(){
    const rootRef = firebase.database().ref().child("users");
    this.bindAsArray(rootRef,"users");
  }

  render() {
    return (
      <div className="App">
      {
        this.state.users.map((user,index)=>{
          return <div key={index}>{user.name}</div>
        })
      }
      <br/>        
      </div>
    );
  }
}
reactMixin(App.prototype, reactfire);
export default App;
