import axios from "axios";

interface Enviroment {
    host: string,
    port: string,
    path: string
}

const LOCAL_ENV: Enviroment = {
    host: "192.168.0.107:",
    port: "8081",
    path: "/health-io"
}

const API_ENV: Enviroment = LOCAL_ENV;

export const API = axios.create({
    baseURL: `${API_ENV.host}${API_ENV.port}${API_ENV.path}`
})

export {AxiosError} from "axios";