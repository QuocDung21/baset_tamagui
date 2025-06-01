export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    role: 'user' | 'admin';
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateUserRequest {
    email: string;
    password: string;
    name: string;
}

export interface UpdateUserRequest {
    name?: string;
    avatar?: string;
} 