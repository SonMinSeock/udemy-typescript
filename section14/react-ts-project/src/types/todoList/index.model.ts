export interface INewTodoProps {
  onAddTodo: (todoText: string) => void;
}

export interface ITodo {
  id: string;
  text: string;
}
