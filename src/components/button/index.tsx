import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <ButtonContainer className="custom-btn btn-7" onClick={onClick}>
      <span>{children}</span>
    </ButtonContainer>
  );
}
