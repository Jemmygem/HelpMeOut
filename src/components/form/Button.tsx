/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from "classnames";

type ButtonType = {
  color?: string;
  children: string;
  className?: string;
  onClick?: () => void;
  rightIcon?: any;
  leftIcon?: any;
};
const Button = ({
  color = "primary",
  children,
  className = "w-max",
  onClick,
  rightIcon,
  leftIcon,
}: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "relative flex h-12 items-center font-Inter justify-center px-6 before:absolute before:inset-0 before:rounded-lg before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95",
        {
          " before:bg-main": color === "primary",
        },
        {
          "before:border before:border-transparent before:bg-main/10 ":
            color === "secondary",
        },
        {
          "bg-white border border-gray-500 rounded-lg focus:outline-none hover:bg-gray-100 ":
            color === "outline",
        },
        className
      )}
    >
      <span
        className={classNames(
          "relative w-max inline-flex items-center font-Inter gap-2",
          { "text-white": color === "primary" },
          {
            "text-main ": color === "secondary",
          },
          { "text-gray-900 font-medium text-sm": color === "outline" }
        )}
      >
        {leftIcon}
        {children}

        {rightIcon}
      </span>
    </button>
  );
};

export default Button;
