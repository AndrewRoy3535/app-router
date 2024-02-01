"use client";
import { useState } from "react";
import { css } from "../../../styled-system/css";
import { Button, Textarea } from "./recipes";

type Props = {
  fetchtds: () => void;
};

function Input({ fetchtds }: Props) {
  const [todo, setTodo] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (todo === "") return;
    try {
      const response = await fetch("/api/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ todo }),
      });
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Topic created:", data.todo);
    } catch (error) {
      console.error("Error creating topic:", error);
    }
    setTodo("");
    fetchtds();
  };
  return (
    <div
      className={css({
        w: "100%",
        pos: "absolute",
        bottom: "10",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        gap: "1",
        p: "1",
      })}>
      <Textarea
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        visual='sl'
      />
      <Button onClick={handleSubmit} visual='sl'>
        ADD +
      </Button>
    </div>
  );
}

export default Input;
