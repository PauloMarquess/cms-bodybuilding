import { ReactNode } from "react";
import { BtnLink } from "./style";

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
    <BtnLink boxShadow={boxShadow} borderRadius={borderRadius} href={link}>
      {children}
    </BtnLink>
  );
};

export default ButtonLink;
