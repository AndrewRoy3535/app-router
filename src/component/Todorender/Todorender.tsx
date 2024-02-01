import { box } from "../../../styled-system/patterns";

type Props = {
  id: string;
  todo: string;
};

const Todorender = ({ id, todo }: Props) => {
  return (
    <div
      key={id}
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
