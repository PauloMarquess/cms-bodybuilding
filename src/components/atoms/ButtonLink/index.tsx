import { ReactNode } from "react";
import { CardButton } from "./style";

interface ButtonLinkProps {
  children: ReactNode;
  link: string;
  borderRadius?: string;
  boxShadow?: boolean;
}

const ButtonLink = ({
  children,
  link,
  borderRadius,
  boxShadow,
}: ButtonLinkProps) => {
  return (
    <CardButton boxShadow={boxShadow} borderRadius={borderRadius} href={link}>
      {children}
    </CardButton>
  );
};

export default ButtonLink;
