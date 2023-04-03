import { createContext } from "react";
import { LoginDTO, RegisterDTO } from "./auth";

export interface AuthMethods {
    login: (data: LoginDTO) => Promise<void>,
    logout: () => void,
    register: (data: RegisterDTO) => Promise<void>
}

export const AuthContext = createContext<AuthMethods>({} as AuthMethods)