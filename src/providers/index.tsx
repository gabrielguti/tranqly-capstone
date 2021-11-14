import { ReactNode } from "react";
import { AuthProvider } from "./authProvider";
import { ProfessionalProvider } from "./professionals";
import { CalendarProvider } from "./calendarProvider";
import { ClientCardProvider } from "./clientProvider";
interface AppProviderProps {
  children: ReactNode;
}
export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ClientCardProvider>
      <CalendarProvider>
        <AuthProvider>
          <ProfessionalProvider>{children}</ProfessionalProvider>
        </AuthProvider>
      </CalendarProvider>
    </ClientCardProvider>
  );
};
