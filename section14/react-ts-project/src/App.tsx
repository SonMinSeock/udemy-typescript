import React from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

interface ITodo {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const todos: ITodo[] = [{ id: "t1", text: "타입스크립트 공부" }];
  const todoAddHandler = (text: string) => {
    console.log(text);
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
