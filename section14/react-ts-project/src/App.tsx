import React from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "타입스크립트 공부" }];
  return (
    <div className="App">
      <NewTodo />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
