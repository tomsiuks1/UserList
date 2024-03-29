import axios, { AxiosResponse } from "axios";
import { User } from "../data/user";


axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody)
};

const Users = {
    GetUsers: () => requests.get<User[]>('/user'),
    GetUser: (id: number) => requests.get<User>(`/user/${id}`),
    AddUser: (user: User) => requests.post('/user', user)
};

const agent = {
    Users
};

export default agent;