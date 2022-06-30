import { ReactNode } from "react";
import { BtnLink } from "./style";

interface ButtonLinkProps {
  children: ReactNode;
  link: string;
}

const ButtonLink = ({ children, link }: ButtonLinkProps) => {
  return <BtnLink href={link}>{children}</BtnLink>;
};

export default ButtonLink;
