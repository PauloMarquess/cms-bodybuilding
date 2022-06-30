import { ReactNode } from "react";
import { ContainerButton } from "./style";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <ContainerButton>
      <button type={type} onClick={onClick}>
        {children}
      </button>
    </ContainerButton>
  );
};
