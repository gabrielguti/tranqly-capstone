import {createContext, ReactNode, useCallback, useContext, useState} from "react"
import api from "../services/api"

interface AuthProviderProps{
    children: ReactNode
}

interface User{
    email:string;
    id:string;
    name:string;
}

interface AuthState{
    accessToken:string;
    user:User;
}

interface SignInCredentials{
    email:string;
    password:string;
}

interface AuthContextData{
    user:User;
    accessToken:string;
    signIn:(credentials: SignInCredentials)=>Promise<void>
}

const UseAuth=()=>{
    const context = useContext(AutContext)
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}

const AutContext = createContext<AuthContextData>({}as AuthContextData)

const AuthProvider = ({children}: AuthProviderProps)=>{

    const [data, setData]=useState<AuthState>(()=>{
    const accessToken =localStorage.getItem("@tranqly:accessToken")
    const user = localStorage.getItem("@tranqly:user")

    if(accessToken && user){
            return{accessToken, user: JSON.parse(user)}
        }
        return{}as AuthState
    })

    const signIn = useCallback(async ({email, password}: SignInCredentials)=>{
        const response = await api.post("/login",{email, password})
        const{accessToken, user} = response.data

        localStorage.setItem("@tranqly:accessToken", accessToken)
        localStorage.setItem("@tranqly:user", JSON.stringify(user))

        setData({accessToken, user})
    },[])

    return(
        <AutContext.Provider value={{
            accessToken:data.accessToken,
            user:data.user,
            signIn 
            }}>
            {children}
        </AutContext.Provider>
    )
}

export {AuthProvider, UseAuth}