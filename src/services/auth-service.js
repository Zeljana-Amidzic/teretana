import axios from "axios";

const API_URL = "http://localhost:8083/authenticate";

const login = (username, password) => {
    return axios.post(API_URL, {
        username,
        password
    })
    .then(response => {
        if(response.data.accessToken){
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
}

const logout = () => {
    localStorage.removeItem("user");
}

const register = (imeprezime, email, password) => {
    return axios.post(API_URL, {
        imeprezime,
        email,
        password
    });
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

const authService = {
    login,
    logout,
    register,
    getCurrentUser,
}

export default authService;