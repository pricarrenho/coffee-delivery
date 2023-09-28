import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonType =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonStyleType = "primary" | "secondary" | "tertiary";

export type ButtonProps = {
  children?: string | number;
  styleType: ButtonStyleType;

  icon?: "trash" | "cart";
  as?: React.ElementType;
} & ButtonType;
