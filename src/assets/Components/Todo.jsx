import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  let [todos, setTodos] = useState([
    { task: " Sample-Task", id: uuidv4(), isCompleted: false },
  ]);
  let [newTodo, setNewTodos] = useState([]);

  function addTask() {
    setTodos([...todos, { task: newTodo, id: uuidv4() }]);
    setNewTodos("");
  }
  let updateValue = (e) => {
    setNewTodos(e.target.value);
  };
  let deleteValue = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };
  let markasDone = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isCompleted: true };
        } else {
          return todo;
        }
      })
    );
  };
  let upddateAll = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, task: todo.task.toUpperCase() };
        } else {
          return todo;
        }
      })
    );
    // let t = newTodo.filter((i) => iid === id);
    // setTodos(t[0].id);
    // let newTodos = newTodo.filter((item) => {
    //   return item.id !== id;
    // });
    // setNewTodos(newTodos);
  };

  return (
    <div className="todo">
      <h1 className="text-2xl font-bold mb-2">Add a Todo</h1>
      <input
        placeholder="Add Your Task"
        value={newTodo}
        onChange={updateValue}
        type="text"
      ></input>
      <button onClick={addTask} type="button">
        Add
      </button>

      <div className="todo2">
        <h2 className="text-xl font-bold mt-3">Your Todos</h2>
        <ul>
          {todos.length === 0 && (
            <div className="text-xl font-medium mt-5">No Todos To Display!</div>
          )}
          {todos.map((todo) => (
            <li className="mt-7 " key={todo.id}>
              <div className="flex justify-between gap-6 text-center">
                <span
                  style={
                    todo.isCompleted
                      ? { textDecorationLine: "line-through" }
                      : {}
                  }
                >
                  {" "}
                  {todo.task}
                </span>

                <div className="delete flex  gap-5">
                  {
                    <button onClick={() => upddateAll(todo.id)} type="button">
                      Edit
                    </button>
                  }
                  <button onClick={(e) => deleteValue(todo.id)} type="button">
                    Delete
                  </button>
                  <button onClick={() => markasDone(todo.id)} type="button">
                    Mark Done
                    <i className="ml-2 fa-solid fa-check "></i>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
