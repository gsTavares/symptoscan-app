import axios from "axios";

interface Enviroment {
    host: string,
    port: string,
    path: string
}

const LOCAL_ENV: Enviroment = {
    host: "HOST",
    port: "PORT",
    path: "PATH"
}

const API_ENV: Enviroment = LOCAL_ENV;

export const API = axios.create({
    baseURL: `${API_ENV.host}${API_ENV.port}${API_ENV.path}`
})

export { AxiosError } from "axios";