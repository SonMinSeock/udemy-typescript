import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { ITodo } from "./types/todoList/index.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const todoAddHandler = (text: string) => {
    const todo = { id: Math.random().toString(), text };
    setTodos((prev) => [todo, ...prev]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onTodoDelete={todoDeleteHandler} />
    </div>
  );
};

export default App;
