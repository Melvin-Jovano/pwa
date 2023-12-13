import axios from "axios";
import { URL } from "../app/api";

export async function eventDetail(eventId) {
    return (await axios.get(`${URL}/event/detail`, {
        params: {
            eventId
        }
    })).data;
}

export async function createEvent({userId = localStorage.getItem('id'), title, description, about, coordinates, address, time, benefits, limit, license, thumbnail}) {
    return (await axios.post(`${URL}/event/create`, {
        userId,
        title,
        description,
        about,
        coordinates,
        address, 
        time, 
        benefits, 
        limit, 
        license, 
        thumbnail
    })).data;
}