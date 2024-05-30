import React, { useRef } from "react";

interface INewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<INewTodoProps> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current?.value;
    if (enteredText) {
      onAddTodo(enteredText);
      textInputRef.current.value = "";
    }
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">일정 텍스트</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button>일정 추가하기</button>
    </form>
  );
};

export default NewTodo;
