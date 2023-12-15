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

export async function exploreEvents({userId = undefined, title = undefined, location = undefined, page = 1, registeredUserId = undefined}) {
    return (await axios.get(`${URL}/event/explore`, {
        userId,
        title,
        location,
        page,
        registeredUserId,
    })).data;
}