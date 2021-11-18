import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { useHistory } from "react-router";
import api from "../services/api";
interface AuthProviderProps {
  children: ReactNode;
}
interface User {
  email: string;
  id: string;
  name: string;
  type: string;
  image: string;
}
interface AuthState {
  accessToken: string;
  user: User;
}
interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  user: User;
  accessToken: string;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  signUp: (data: SignUpCredentials) => void;
}
interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
  gender?: string;
  profession?: string;
  areas?: string;
  description?: string;
  type?: string;
  price?: number;
  language?: string;
  state?: string;
  crp?: string;
  zoom?: string;
  passwordZoom?: string;
}

const UseAuth = () => {
  const context = useContext(AutContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AutContext = createContext<AuthContextData>({} as AuthContextData);
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem("@tranqyl:accessToken");
    const user = localStorage.getItem("@tranqyl:user");
    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });
  const history = useHistory();

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post("/login", { email, password });
    const { accessToken, user } = response.data;
    localStorage.setItem("@tranqyl:accessToken", accessToken);
    localStorage.setItem("@tranqyl:user", JSON.stringify(user));
    setData({ accessToken, user });
  }, []);
  const signOut = useCallback(() => {
    localStorage.removeItem("@tranqyl:accessToken");
    localStorage.removeItem("@tranqyl:user");
    localStorage.clear();
    setData({} as AuthState);
  }, []);

  const signUp = (data: SignUpCredentials) => {
    api
      .post(`/register`, data)
      .then(() => history.push("/signin"))
      .catch((e) => console.log(e));
  };

  return (
    <AutContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        signIn,
        signOut,
        signUp,
      }}
    >
      {children}
    </AutContext.Provider>
  );
};
export { AuthProvider, UseAuth };
