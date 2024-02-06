import { box } from "../../styled-system/patterns";
import RenderTodo from "./pages/rendertodo/page";
import Header from "@/app/component/Header/Header";

interface Todo {
  _id: string;
  todo: string;
  createdAt: string;
  updatedAt: string;
}

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/todo", {
    next: {
      revalidate: 5,
    },
  });
  const todo: Todo[] = await res.json();

  return (
    <>
      <Header text='Add note' href='pages/todo' />
      <div
        className={box({
          display: "flex",
          justifyContent: "center",
          bg: "gray.800",
        })}>
        <div className={box({ md: { w: "34%" } })}>
          <RenderTodo todos={todo} />
        </div>
      </div>
    </>
  );
}
