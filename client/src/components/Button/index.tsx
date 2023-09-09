import React from "react";
import { cn } from "../../utils";

type Props = {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ className, children }: Props) => {
  return (
    <button
      className={cn(
        "p-2 bg-blue-700 text-white rounded-full px-3 hover:bg-blue-600",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
