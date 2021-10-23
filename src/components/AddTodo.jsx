import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: uuidv4(),
        title: inputData,
        completed: false,
      })
    );
    setInputData("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Add new todo..."
        onChange={(e) => setInputData(e.target.value)}
        value={inputData}
        required
        className="form-input bg-[#25273c] w-full py-3 px-4 rounded-md text-[#cacde8] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent font-jose font-normal"
      />
    </form>
  );
};

export default AddTodo;
