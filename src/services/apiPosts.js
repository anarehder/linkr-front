import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

function getTimeline(token) {
    return axios.get(`${BASE_URL}/posts`, { headers: { Authorization: token } });
}

function publishPost(body, token){
    return axios.post(`${BASE_URL}/post`, body, { headers: { Authorization: token } })
}

function getPostsByUserID(token, id) {
    return axios.get(`${BASE_URL}/posts/users/${id}`, { headers: { Authorization: token } });
}
const apiPosts = { getTimeline, publishPost, getPostsByUserID };

export default apiPosts;