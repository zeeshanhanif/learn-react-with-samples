import React, { Component } from 'react';
import './App.css';
import Hello from '../../components/hello/Hello'
import * as firebase from 'firebase';

class App extends Component {

  componentDidMount(){
    const rootRef = firebase.database().ref().child("message");

    // Updating Values in firebase
    rootRef.set("Hello World").then(function (data){
      console.log("save success on firebase  ",data);
    }).catch(function (error){
      console.log("error updating firebase ",error);
    });;
  }

  render() {
    return (
      <div className="App">
        <Hello name="Zeeshan" age={12}  />
      </div>
    );
  }
}

export default App;
