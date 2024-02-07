import { cva } from "../../../../styled-system/css";
import { styled } from "../../../../styled-system/jsx";

const buttonRecipe = cva({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    color: "gray.50",
    fontWeight: "bold",
  },
  variants: {
    visual: {
      sl: {
        w: "20%",
        bg: "gray.800",
        md: { w: "10%" },
        borderRadius: "lg",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.5)",
        transition: "0.3s ease",
        _hover: { bg: "gray.700" },
      },
    },
  },
});
export const Button = styled("button", buttonRecipe);

const inputRecipe = cva({
  base: {
    w: "70%",
    md: { w: "50%" },
  },
  variants: {
    visual: {
      sl: {
        bg: "gray.800",
        borderRadius: "lg",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.5)",
        p: "3",
        outline: "none",
        resize: "none",
        caretColor: "gray.50",
        color: "gray.50",
      },
    },
  },
});
export const Textarea = styled("textarea", inputRecipe);
