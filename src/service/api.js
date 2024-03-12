import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
export const usersUrl = 'http://localhost:4000/api';

export const getAPI= async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}


export const addAPI= async (url,user) => {
    return await axios.post(`${usersUrl}/${url}/`, user);
}

export const deleteAPI= async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editAPI= async (id, user) => {
    return await axios.patch(`${usersUrl}/${id}`, user)
}
export const getTokenAPI = async (id, token) => {
    id = id || '';
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return await axios.get(`${usersUrl}/${id}`, config);
};