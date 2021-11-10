import { ReactNode } from "react";
import { AuthProvider } from "./AuthProvider";

interface AppProviderProps{
  children:ReactNode
}
export const AppProvider = ({children}:AppProviderProps)=>{
  <AuthProvider>
    {children}
  </AuthProvider>
}