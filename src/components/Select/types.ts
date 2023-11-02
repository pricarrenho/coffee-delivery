import { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export type SelectProps = {
  option: string;
  select: string;
} & ButtonType;
