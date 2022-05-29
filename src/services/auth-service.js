import Axios from "axios";
import { setToken } from "./auth-one";

const API_URL = "http://localhost:8083/authenticate";

const login = (username, password) => {
    return Axios.post(API_URL, {
        username,
        password
    })
    .then(response => {
        if(response.data.accessToken){
            localStorage.setItem("user", JSON.stringify(response.data));
            setToken(response?.data?.accessToken);
        }
        return response.data;
    });
}

const logout = () => {
    localStorage.removeItem("user");
}

const register = (imeprezime, email, password) => {
    return Axios.post(API_URL, {
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