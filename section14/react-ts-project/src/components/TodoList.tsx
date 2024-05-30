import React from "react";

interface ITodoListProps {
  items: {
    id: string;
    text: string;
  }[];
}

const TodoList: React.FC<ITodoListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
