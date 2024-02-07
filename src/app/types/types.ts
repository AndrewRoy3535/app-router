export interface Todo {
  _id: string;
  todo: string;
  createdAt: string;
  updatedAt: string;
}

export type Props = {
  todos: Todo[];
};
