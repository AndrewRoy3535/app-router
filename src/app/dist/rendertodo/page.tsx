import { box } from "../../../../styled-system/patterns";
import Todorender from "@/component/Todorender/Todorender";

interface Todo {
  _id: string;
  todo: string;
  createdAt?: string;
  updatedAt?: string;
}

type Props = {
  todos: Todo[];
};

const RenderTodo = ({ todos }: Props) => {
  return (
    <div className={box({ h: "100vh", pos: "relative" })}>
      {todos.map((tds) => (
        <Todorender key={tds._id} id={tds._id} todo={tds.todo} />
      ))}
    </div>
  );
};

export default RenderTodo;
