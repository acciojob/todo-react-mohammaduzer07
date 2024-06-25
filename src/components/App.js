
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input, setInput] = useState("");
  const [addTodo, setTodo] = useState([]);

  let handleToDo = () => {
    if (input !== "") {
      let todo = input;
      setInput("")
      setTodo(prev => [todo, ...prev])
    }
  }
  let handleDelete = (index) => {
    let updateTodo = addTodo.filter((todo, i) => i !== index)
    setTodo(updateTodo);
    console.log(updateTodo);
  }

  return (
    <div className="main">

      <h3>To-Do-List</h3>

      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleToDo}>Add Todo</button>
      </div>

      <ul>
        {addTodo && addTodo.length>0 && addTodo.map((todo, index) => {
          return <li className="todos" key={index}> <p>{todo}</p> <button onClick={() => handleDelete(index)}>Delete</button></li>
        })}
      </ul>

    </div >
  )
}

export default App
