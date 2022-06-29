import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <div>
      <button type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
