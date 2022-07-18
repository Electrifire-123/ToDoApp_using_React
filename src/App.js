import React, { useState } from "react";
import { addTodo, checkTodo, deleteTodo } from "./helper";
import "./App.css";
import Button from "./component/Button";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);
  

  return (
    <>
      <div className="todo_container">
        <h1>TODO APPLICATION</h1>
        <div className="input_container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            required={true}
            placeholder="Set Task Here"
          />
          <Button
            onClick={() => addTodo(inputValue, todos, setTodos, setInputValue)}
            buttonText="Add Task"
          />
        </div>
        <div className="list_container">
          {todos.map((v) => {
            return (
              <div
                className={`list_item 
          ${completed.includes(v.id) ? "checked_list_item" : ""}`}
                key={v.id}
              >
                <p>{v.todotext}</p>
                <section>
                  <Button
                    className="cm_btn danger"
                    onClick={() => deleteTodo(v.id, todos, setTodos)}
                    buttonText="Delete"
                  />
                  <Button
                    className="cm_btn done"
                    onClick={() => checkTodo(v.id, completed, setCompleted)}
                    buttonText="Done"
                  />
                </section>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
