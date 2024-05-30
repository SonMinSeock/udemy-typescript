import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { ITodo } from "./types/todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const todoAddHandler = (text: string) => {
    const todo = { id: Math.random().toString(), text };
    setTodos((prev) => [todo, ...prev]);
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
