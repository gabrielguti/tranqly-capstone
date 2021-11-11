import { ReactNode } from "react";
import { AuthProvider } from "./authProvider";
import { ProfessionalProvider } from "./professionals";

interface AppProviderProps {
  children: ReactNode;
}
export const AppProvider = ({ children }: AppProviderProps) => {
  return <AuthProvider><ProfessionalProvider>{children}</ProfessionalProvider></AuthProvider>;
};
