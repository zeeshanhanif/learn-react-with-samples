import TodoListAction from '../actions/todoList'

const INITIAL_STATE = {
    todo : {
      todoList : [
      
      ]
    },
    maxId : 0
}

function TodoListReducer(state = INITIAL_STATE, action) {
   var items = null;
  switch (action.type) {
  case TodoListAction.ADD_TODO:
    var newState = Object.assign({}, state );
    newState.maxId += 1;
    newState.todo.todoList.push({...action.payload,id:newState.maxId});
    return newState;
  case TodoListAction.DELETE_TODO:
    items = state.todo.todoList.filter(todo=> {
      return todo.id !== action.id;
    })
    return Object.assign({}, state, { todo : {todoList:items} });
  case TodoListAction.UPDATE_TODO:
    items = state.todo.todoList.map(todo=>{
      return todo.id===action.id? {...todo, text:action.text} : todo
    })
    return Object.assign({}, state , { todo : {todoList:items} });
  case TodoListAction.TOGGLE_TODO:
    items = state.todo.todoList.map(todo=>{
      return todo.id===action.id? {...todo, completed:!todo.completed} : todo
    })
    return Object.assign({}, state , { todo : {todoList:items} });
  default:
    return state
  }
}

export default TodoListReducer;