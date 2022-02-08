import React, {useState} from "react";
import "./App.css";
import InputBox from "./component/inputBox/inputBox.js";
import TodoList from "./component/todoList/todoList";

const App = () =>{

  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);




  return(
    <div className="app">
      <header className="appName">
        <h2>To-Do App</h2>
      </header>
      <main>
        <InputBox text={text} setText={setText} todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </main>
      
    </div>
  );
}

export default App;

