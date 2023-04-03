export interface LoginDTO {
    email: string,
    password: string
}

export interface RegisterDTO {
    fullName: string,
    birthDate: string,
    sex: string,
    email: string,
    password: string
}

export interface AuthSuccessDTO {
    fullName: string,
    status: number,
    refreshToken: string
}

export interface AuthErrorDTO {
    timestamp: number,
    status: number,
    error: string,
    message: string,
    path: string
}