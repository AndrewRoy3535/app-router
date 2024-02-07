import { box } from "../../../../styled-system/patterns";
import { Todo, Props } from "@/app/types/types";

const Alltodos = ({ todos }: Props) => {
  return (
    <div
      className={box({
        w: "2/4",
        h: "4/5",
        overflow: "scroll",
      })}>
      {todos.map((el) => (
        <div
          key={el._id}
          className={box({
            bg: "gray.600",
            color: "gray.50",
            border: "1px solid white",
            textAlign: "center",
            p: "5",
            m: "2",
            rounded: "lg",
          })}>
          <h2>{el.todo}</h2>
        </div>
      ))}
    </div>
  );
};

export default Alltodos;
