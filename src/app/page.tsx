import { box } from "../../styled-system/patterns";
import Header from "@/app/component/Header/Header";
import Alltodos from "@/app/component/Alltodo/Alltodos";
import { Todo } from "./types/types";

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
          h: "90vh",
          alignItems: "center",
        })}>
        <Alltodos todos={todo} />
      </div>
    </>
  );
}
