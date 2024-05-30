import React, { useRef } from "react";

const NewTodo: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current?.value;
    console.log(enteredText);
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
