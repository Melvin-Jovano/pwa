import axios from "axios";
import { URL } from "../app/api";

export default async function refreshToken(refresh_token) {
    return await axios.post(`${URL}/auth/refresh`, {
        refresh_token,
    });
}