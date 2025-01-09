import React from "react";

const TodoContainer = ({ children }) => {
  return <section className="grid grid-cols-3">{children}</section>;
};

export default TodoContainer;
