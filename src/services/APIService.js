import {API_URL} from "../constants/API_URL.jsx";

export const fetchData = (q, page = 1, limit = 12) =>
{
    return fetch(`${API_URL}?q=${q}&page=${page}&limit=${limit}`)
        .then(data => data.json())
        .then((data) => data.docs)
}
