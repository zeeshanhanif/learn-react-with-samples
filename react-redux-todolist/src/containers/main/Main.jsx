import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Main.css';
import {AddTodo, TodoList} from '../../components';
import TodoListAction from '../../store/actions/todoList';

function mapStateToProps(state) {
    return {
        todoState: state.TodoListReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (todoText) => dispatch(TodoListAction.addTodo(todoText)),
        deleteTodo: (id,todoIndex) => dispatch(TodoListAction.deleteTodo(id,todoIndex)),
        editTodo: (id,todoIndex,todoText) => dispatch(TodoListAction.updateTodo(id,todoIndex,todoText)),
        toggleTodo: (id,todoIndex) => dispatch(TodoListAction.toggleTodo(id,todoIndex))
    };
}

class Main extends Component {

  render() {
    
    return (
      <div >
        <div>
          <AddTodo addTodoEvent={this.props.addTodo} />
        </div>
        <hr/>
        <div>
          <span>Todo List</span>
          <TodoList todoObj={this.props.todoState.todo} 
                    deleteTodo={this.props.deleteTodo}
                    editTodo={this.props.editTodo}
                    toggleTodo={this.props.toggleTodo} />
        </div>
        <hr/>
      </div>
    );
  }
}

//export default Main;
export default connect(mapStateToProps,mapDispatchToProps)(Main);
