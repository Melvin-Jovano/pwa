import axios from "axios";
import { URL } from "../app/api";

export async function logout(refresh_token) {
    return await axios.delete(`${URL}/auth/logout`, {
        refresh_token,
    });
}

export async function refreshToken(refresh_token) {
    return await axios.post(`${URL}/auth/refresh`, {
        refresh_token,
    });
}