import { css } from "../../../../styled-system/css";
import { box, center } from "../../../../styled-system/patterns";

const Signin = () => {
  return (
    <div
      className={css({
        bg: "gray.800",
        w: "100vw",
        h: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      })}>
      <div
        className={box({
          w: "3/4",
          h: "2/5",
          md: { w: "2/4", h: "2/4" },
          lg: { w: "2/5", h: "3/5" },
          bg: "gray.500",
          borderRadius: "md",
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.5)",
        })}>
        <div
          className={box({
            h: "1/6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "lg",
          })}>
          <span
            className={css({
              fontSize: "md",
              md: { fontSize: "2xl" },
              fontWeight: "bold",
              color: "yellow.100",
            })}>
            Sign Up/Sign In
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
