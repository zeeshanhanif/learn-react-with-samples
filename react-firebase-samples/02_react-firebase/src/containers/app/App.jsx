import React, { Component } from 'react';
import './App.css';
import Hello from '../../components/hello/Hello'
import * as firebase from 'firebase';

class App extends Component {

  constructor(){
    super();
    this.state = {
      message : "Hello World"
    }
  }

  componentDidMount(){
    const rootRef = firebase.database().ref().child("message");

    // Updating Values in firebase
    rootRef.set("Hello World").then(function (data){
      console.log("save success on firebase  ",data);
    }).catch(function (error){
      console.log("error updating firebase ",error);
    });;

    //Listing to value from firebase
    rootRef.on('value',snapshot=>{
      this.setState({message:snapshot.val()});
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.message}<br/>
        
      </div>
    );
  }
}

export default App;
