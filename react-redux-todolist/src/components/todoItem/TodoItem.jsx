import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

  constructor(props){
    super(props);    
    this.state = {
      doEdit : false,
      todo : props.todo.text
    };
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editToggle = this.editToggle.bind(this);
    this.editSave = this.editSave.bind(this);
    this.todoTextOnChange = this.todoTextOnChange.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }
  
  deleteTodo(){
    //this.props.deleteTodo(this.props.index);
    this.props.deleteTodo(this.props.todo.id);
  }

  editToggle(){
    this.setState({doEdit:!this.state.doEdit});
  }

  editSave(){
    this.setState({doEdit:!this.state.doEdit});
    this.props.editTodo(this.props.todo.id,this.props.index,this.state.todo)
    //this.props.editTodo(this.props.index,this.state.todo)
    
  }

  todoTextOnChange(e){
    this.setState({todo:e.target.value});
  }

  toggleTodo(e){
    console.log(e.target.value);
    console.log(e.target.checked);
    /*if(e.target.checked==true){
      e.target.checked=false;
    }*/
    this.props.toggleTodo(this.props.todo.id,this.props.index);
  }

  renderDisplayTodo(){
    return (<div>
              <span style={{margin:"5px"}}><input type="checkbox" onChange={this.toggleTodo} checked={this.props.todo.completed}/></span>
              <span style={{margin:"5px"}}><button onClick={this.deleteTodo}>Delete</button></span>
              <span style={{margin:"5px"}}><button onClick={this.editToggle}>Edit</button></span>  
              <span className="todoText">{this.props.todo.text}</span>
          </div>)
  }

  renderEditTodo(){
    return (<div>
              <span style={{margin:"5px"}}><input type="checkbox" onChange={this.toggleTodo} checked={this.props.todo.completed}/></span>
              <span><input type="text" value={this.state.todo} onChange={this.todoTextOnChange} /></span>
              <span style={{margin:"5px"}}><button onClick={this.editSave}>Save</button></span>              
        </div>)
  }

  renderBasedOnCodition(){
    var item = null;
    if(this.state.doEdit){
      item = this.renderEditTodo();
    }
    else {
      item = this.renderDisplayTodo();
    }
    return item;
  }

  render() {
    return (
      <li>
        <div>
          
          {this.renderBasedOnCodition()}                  
        </div>
      </li>      
    );
  }
}

export default TodoItem;
