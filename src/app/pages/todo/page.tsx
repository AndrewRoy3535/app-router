"use client";
import { useEffect, useState } from "react";
import { box } from "../../../../styled-system/patterns";
import Input from "@/app/component/Input/Input";
import Todorender from "@/app/component/Todorender/Todorender";
import Header from "@/app/component/Header/Header";

interface Todo {
  _id: string;
  todo: string;
  createdAt?: string;
  updatedAt?: string;
}

type Props = {
  todos: Todo[];
};

const Todo = ({ todos }: Props) => {
  const [newtds, setNewtds] = useState<Todo[]>([]);

  useEffect(() => {
    fetchtds();
  }, []);

  const fetchtds = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/todo", {
        cache: "no-store",
      });
      const todo = await res.json();
      setNewtds(todo);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  return (
    <>
      <Header text='Back' href='/' />
      <div
        className={box({
          display: "flex",
          justifyContent: "center",
          bg: "gray.800",
        })}>
        <div
          className={box({
            h: "100vh",
          })}>
          {(newtds || todos).map((tds) => (
            <Todorender key={tds._id} _id={tds._id} todo={tds.todo} />
          ))}
        </div>
        <Input fetchtds={fetchtds} />
      </div>
    </>
  );
};

export default Todo;
