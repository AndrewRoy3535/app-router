import React from "react";
import { box } from "../../../../styled-system/patterns";
import Link from "next/link";

type Props = {
  text: string;
  href: string;
};

function Header({ text, href }: Props) {
  return (
    <div
      className={box({
        display: "flex",
        height: "50px",
        bg: "gray.700",
        justifyContent: "center",
        color: "gray.50",
        fontWeight: "bold",
        alignItems: "center",
      })}>
      <Link href={href}>{text}</Link>
    </div>
  );
}

export default Header;
