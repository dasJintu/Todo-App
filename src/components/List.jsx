import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import cross from "../images/icon-cross.svg";
import {
  removeTodo,
  toggleCompleted,
  selectCompletedTodos,
  selectActiveTodos,
} from "../features/todo/todoSlice";

const List = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todo.todoList);
  const completedTodos = useSelector(selectCompletedTodos);
  const activeTodos = useSelector(selectActiveTodos);

  const [list, setList] = useState("all");
  return (
    <div className="-mt-12 max-w-md mx-auto rounded-md overflow-hidden">
      <ul>
        {list === "all" &&
          todoList.map((todo) => (
            <li
              key={todo.id}
              className="bg-[#25273c] w-full py-3 px-4 border-b border-[#393a4c] flex justify-between items-center"
            >
              <span>
                <input
                  className="form-checkbox rounded-full text-[#3a7bfd] mr-5"
                  type="checkbox"
                  checked={todo.completed}
                  id={todo.id}
                  onChange={() => dispatch(toggleCompleted(todo.id))}
                />
                <label
                  className={
                    todo.completed
                      ? "line-through text-[#4d5066] "
                      : " text-[#cacde8]"
                  }
                  htmlFor={todo.id}
                >
                  {todo.title}
                </label>
              </span>
              <button
                className="right-0"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <img src={cross} alt="cross icon" />
              </button>
            </li>
          ))}
      </ul>
      <ul>
        {list === "active" &&
          activeTodos.map((todo) => (
            <li
              key={todo.id}
              className="bg-[#25273c] w-full py-3 px-4 border-b border-[#393a4c] flex justify-between items-center"
            >
              <span>
                <input
                  className="form-checkbox rounded-full text-[#3a7bfd] mr-5"
                  type="checkbox"
                  checked={todo.completed}
                  id={todo.id}
                  onChange={() => dispatch(toggleCompleted(todo.id))}
                />
                <label
                  className={
                    todo.completed
                      ? "line-through text-[#4d5066]"
                      : "text-[#cacde8]"
                  }
                  htmlFor={todo.id}
                >
                  {todo.title}
                </label>
              </span>
              <button
                className="right-0"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <img src={cross} alt="cross icon" />
              </button>
            </li>
          ))}
      </ul>
      <ul>
        {list === "completed" &&
          completedTodos.map((todo) => (
            <li
              key={todo.id}
              className="bg-[#25273c] w-full py-3 px-4 border-b border-[#393a4c] flex justify-between items-center"
            >
              <span>
                <input
                  className="form-checkbox rounded-full text-[#3a7bfd] mr-5"
                  type="checkbox"
                  checked={todo.completed}
                  id={todo.id}
                  onChange={() => dispatch(toggleCompleted(todo.id))}
                />
                <label
                  className={
                    todo.completed
                      ? "line-through text-[#4d5066]"
                      : "text-[#cacde8]"
                  }
                  htmlFor={todo.id}
                >
                  {todo.title}
                </label>
              </span>
              <button
                className="right-0"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <img src={cross} alt="cross icon" />
              </button>
            </li>
          ))}
      </ul>
      <div className="bg-[#25273c] py-3 px-4 w-full flex justify-center items-center gap-4">
        <button
          onClick={() => setList("all")}
          className={list === "all" ? "text-[#3a7bfd]" : "text-[#4d5066]"}
        >
          All
        </button>
        <button
          onClick={() => setList("active")}
          className={list === "active" ? "text-[#3a7bfd]" : "text-[#4d5066]"}
        >
          Active
        </button>
        <button
          onClick={() => setList("completed")}
          className={list === "completed" ? "text-[#3a7bfd]" : "text-[#4d5066]"}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default List;
