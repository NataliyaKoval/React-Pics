import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID dFi2fCExpLsTSd-1ITD6AmiQJBbm053-abj4pgmvUkI'
    }
})