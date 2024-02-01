import { box } from "../../styled-system/patterns";
import Todo from "./dist/todo/page";
import RenderTodo from "./dist/rendertodo/page";
import Header from "@/component/Header/Header";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/todo", {
    cache: "no-store",
  });
  const todo = await res.json();

  return (
    <>
      <Header text='Add note' href='dist/todo' />
      <div
        className={box({
          display: "flex",
          justifyContent: "center",
          bg: "gray.800",
        })}>
        <div className={box({ md: { w: "70%" } })}>
          <RenderTodo todos={todo} />
        </div>
      </div>
    </>
  );
}
