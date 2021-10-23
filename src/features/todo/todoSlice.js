import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state, action) => {
      const removedTodo = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      state.todoList = removedTodo;
    },
    toggleCompleted: (state, action) => {
      state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
    },
  },
});

export const { addTodo, removeTodo, toggleCompleted } = todoSlice.actions;

export const selectCompletedTodos = (state) =>
  state.todo.todoList.filter((t) => t.completed);

export const selectActiveTodos = (state) =>
  state.todo.todoList.filter((t) => !t.completed);

export default todoSlice.reducer;
