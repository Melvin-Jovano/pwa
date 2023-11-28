import axios from "axios";
import { URL } from "../app/api";

export default async function logout(refresh_token) {
    return await axios.delete(`${URL}/auth/logout`, {
        refresh_token,
    });
}