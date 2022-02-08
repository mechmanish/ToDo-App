import React from "react";
import "./inputBox.css";

const InputBox = ({text, setText, todos, setTodos}) =>{

    const textHandler = (item) =>{
        // console.log(e); Here, e give us the synthaticBase event object

        setText(item.target.value);
    } 

    const addBtnHandler = () =>{
        setTodos([...todos, { title: text, completed: false, id: Math.random()*1000}]);
        setText("");

        // console.log(todos);
    }


    return(
        <div className="inputArea">
            <input onChange={textHandler} value={text} className="inputBox" type="text" placeholder="To-Do item..." />
            <button onClick={addBtnHandler} className="addBtn">Add</button>
        </div>
    );
}

export default InputBox;
