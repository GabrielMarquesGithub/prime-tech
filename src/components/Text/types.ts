import { HTMLAttributes } from "react";

export interface ITextProps
  extends Pick<HTMLAttributes<HTMLParagraphElement>, "children"> {
  is: "p" | "span" | "h1" | "h2" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "small" | "base" | "big" | "large" | "huge";
  variant?: "base" | "invert" | "info";
  decoration?: "underline";
  lineLimit?: 1 | 2;
}
