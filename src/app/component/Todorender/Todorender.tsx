"use client";
import { box } from "../../../../styled-system/patterns";

type Props = {
  _id?: string;
  todo?: string;
};

const Todorender = ({ _id, todo }: Props) => {
  const handleDelete = async (_id: string) => {
    try {
      const res = await fetch("/api/todo", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id }),
      });
      if (!res.ok) {
        throw new Error(`API request failed with status: ${res.status}`);
      }
      const data = await res.json();
      console.log("Topic deleted:", data._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      key={_id}
      className={box({
        display: "flex",
        border: "0.5px solid #ccc",
        p: "1",
        m: "1",
        borderRadius: "lg",
        color: "red.50",
        fontSize: "lg",
        flexDirection: "column",
      })}>
      <p>{todo}</p>
      <button
        onClick={() => handleDelete(_id as string)}
        className={box({
          color: "red.900",
          cursor: "pointer",
          p: "1",
          m: "1",
          w: "20%",
          alignSelf: "end",
          rounded: "sm",
          fontWeight: "bold",
          bg: "gray.500",
          _hover: { bg: "gray.700" },
          fontSize: "sm",
        })}>
        Del
      </button>
    </div>
  );
};

export default Todorender;
