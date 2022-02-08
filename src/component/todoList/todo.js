import React, {useState} from "react";
import "./todoList.css";

const Todo = ({todos, setTodos, todo}) =>{

    const [done, setDone] = useState(false);

    const doneBtnHandler = () =>{
        setDone(!done);
    }

    const deleteBtnHandler = () =>{
        setTodos(todos.filter((item) => todo.id !== item.id));
    }


    return(
        <div className="todo">
            <li key={todo.id} className={done ? "done" : ""}>{todo.title}</li>
            <div className="todoBtns">
                <button className="todoBtn" onClick={doneBtnHandler}>Done</button>
                <button className="todoBtn" onClick={deleteBtnHandler}>Delete</button>
            </div>
        </div>
    );
}

export default Todo;