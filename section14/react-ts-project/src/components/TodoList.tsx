import React from "react";

interface ITodoListProps {
  items: {
    id: string;
    text: string;
  }[];
  onTodoDelete: (id: string) => void;
}

const TodoList: React.FC<ITodoListProps> = ({ items, onTodoDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={onTodoDelete.bind(null, item.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
