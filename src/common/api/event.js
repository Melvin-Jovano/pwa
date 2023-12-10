import axios from "axios";
import { URL } from "../app/api";

export async function eventDetail(eventId) {
    return (await axios.get(`${URL}/event/detail`, {
        params: {
            eventId
        }
    })).data;
}