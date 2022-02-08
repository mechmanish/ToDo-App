import React from "react";
import "./todoList.css";
import Todo from "./todo.js";

const TodoList = ({todos, setTodos}) =>{



    return(
        <div className="todoList">
            <ul>
                {todos.map(todo => <Todo todos={todos} setTodos={setTodos} todo={todo} />)}
            </ul>
        </div>
    );
}

export default TodoList;