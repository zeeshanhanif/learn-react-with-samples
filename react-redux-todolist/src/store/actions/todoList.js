export default class TodoListAction {

    static ADD_TODO = "ADD_TODO";
    static UPDATE_TODO = "UPDATE_TODO";
    static DELETE_TODO = "DELETE_TODO";
    static TOGGLE_TODO = "TOGGLE_TODO";

    static addTodo(todoItemDescription){
        return { 
            type: TodoListAction.ADD_TODO,
            payload : {
                text: todoItemDescription,
                completed : false
            }
        }
    }

    static deleteTodo(id,index){
        return { 
            type: TodoListAction.DELETE_TODO,
            itemIndex: index,
            id:id
        }
    }

    static updateTodo(id,itemIndex,updateTodoText){
        return { 
            type: TodoListAction.UPDATE_TODO,
            text: updateTodoText,
            itemIndex: itemIndex,
            id:id
        }
    }

    static toggleTodo(id,index){
        return { 
            type: TodoListAction.TOGGLE_TODO,
            itemIndex: index,
            id:id
        }
    }
}