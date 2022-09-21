import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({ className, children, theme, ...otherProps }) => {
  return (
    <button {...otherProps} className={classNames(cls.Button, { [cls[theme]]: true }, [className])}>
      {children}
    </button>
  );
};
