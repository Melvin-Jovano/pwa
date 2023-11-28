import axios from "axios";
import { URL } from "../app/api";

export async function logout(refresh_token) {
    return (await axios.delete(`${URL}/auth/logout`, {
        refresh_token,
    })).data;
}

export async function refreshToken(refresh_token) {
    return (await axios.post(`${URL}/auth/refresh`, {
        refresh_token,
    })).data;
}

export async function login(email, password) {
    return (await axios.post(`${URL}/auth/login`, {
        email, 
        password
    })).data;
}

export async function register(email, username) {
    return (await axios.post(`${URL}/auth/register`, {
        email, 
        username
    })).data;
}

export async function verify(password, repeatPassword, code) {
    return (await axios.post(`${URL}/auth/verify/${code}`, {
        password, 
        repeatPassword
    })).data;
}

