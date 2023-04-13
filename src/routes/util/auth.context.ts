import { createContext } from "react";
import { AuthErrorDTO, AuthSuccessDTO, LoginDTO, RegisterDTO } from "./auth";

export interface AuthMethods {
    login: (data: LoginDTO) => Promise<AuthSuccessDTO | AuthErrorDTO>,
    logout: () => void,
    register: (data: RegisterDTO) => Promise<void>
}

export const AuthContext = createContext<AuthMethods>({} as AuthMethods)