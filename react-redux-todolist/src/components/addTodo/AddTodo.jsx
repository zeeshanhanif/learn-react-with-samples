import React, { Component } from 'react';
import './AddTodo.css';

class AddTodo extends Component {

  constructor(){
    super();
    this.state = {
      todoDescription : ""
    }
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(){
    console.log(this.refs.todoText.value);
    this.props.addTodoEvent(this.refs.todoText.value);
  }

  render() {
    return (
      <div >
        Add Todo Item<br/>
        <input type="text" ref="todoText" placeholder="Todo Description"/>
        <button onClick={this.addTodo}>Add</button>
      </div>
    );
  }
}

export default AddTodo;
