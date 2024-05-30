import React from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "타입스크립트 공부" }];
  return (
    <div className="App">
      <TodoList items={todos} />
    </div>
  );
};

export default App;
