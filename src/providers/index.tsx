import { ReactNode } from 'react'
import { AuthProvider } from './authProvider'
import { ProfessionalProvider } from './professionals'
import { CalendarProvider } from './calendarProvider'
interface AppProviderProps {
    children: ReactNode
}
export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <CalendarProvider>
            <AuthProvider>
                <ProfessionalProvider>{children}</ProfessionalProvider>
            </AuthProvider>
        </CalendarProvider>
    )
}
