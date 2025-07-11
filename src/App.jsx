import React, { useState } from "react";
import Todo from "./components/todo";
// import Todocontainter from './components/Todocontainter';

function App() {
  const [val, setVal] = useState([]);
  const [todo, setTodo] = useState("");

  const addTask = () => {
    if (!todo.trim()) return;
    const newTask = {
      todo,
      iscomplate: false,
    };
    setVal([...val, newTask]);
    setTodo("");
  };

  const handleRemove = (index) => {
    setVal(val.filter((item, idx) => idx !== index));
  };

  return (
    <>
      <div className="w-full  h-screen bg-zinc-800 flex justify-center items-center">
        <div className="container max-h-2/3 md:max-h-[45vw]   overflow-y-auto w-96 md:w-[50vw] bg-white flex flex-col rounded-xl">
          <h1 className="text-center text-2xl font-bold my-5">TO DO LIST</h1>
          <div className="w-full flex items-center justify-evenly px-4">  
            <input
              className="py-4 px-6 border w-full rounded-l-xl placeholder:font-bold"
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              type="text"
              placeholder="Enter Your TODO"
            />
            <button
              onClick={addTask}
              className="py-3 px-6 my-3 rounded-r-2xl text-2xl bg-blue-500 border-2"
              type="submit"
            >
              Add
            </button>
          </div>

          <div className="w-full max-h-2/3 md:h-[70vw] overflow-y-auto">
            <Todo
              val={val}
              todo={todo}
              setVal={setVal}
              handleRemove={handleRemove}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
