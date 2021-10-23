import React from "react";
import AddTodo from "./AddTodo";

const Header = () => {
  return (
    <header className="bg-dark-hero py-16">
      <div className="container">
        <div className="space-y-8 max-w-md mx-auto">
          <div className="flex justify-between items-center ">
            <h1 className="uppercase text-4xl font-uppercase font-bold tracking-widest">
              Todo
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <AddTodo />
        </div>
      </div>
    </header>
  );
};

export default Header;
