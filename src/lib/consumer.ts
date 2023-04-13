import { API } from "./axios";
import { get } from "./secure.storage";

interface ApiResponse<T> {
    status: number,
    body: T,
    message: string
}

export const doPost = async<T>(path: string, data: object): Promise<ApiResponse<T>> => {
    const token = await get("accessToken");
    const response = await API.post<ApiResponse<T>>(path, data, {
        headers: {
            Authorization: token
        }
    });

    let body = response.data;
    return body;
}

export const doPut = async <T>(path: string, data: object): Promise<ApiResponse<T>> => {
    const token = await get("accessToken");
    const response = await API.put<ApiResponse<T>>(path, data, {
        headers: {
            Authorization: token
        }
    });
    const body = response.data;
    return body;
}

export const doGet = async <T>(path: string): Promise<ApiResponse<T>> => {
    const token = await get("accessToken");
    const response = await API.get<ApiResponse<T>>(path, {
        headers: {
            Authorization: token
        }
    });
    const body = response.data;
    return body;
}