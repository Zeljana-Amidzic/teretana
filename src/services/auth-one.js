import Axios from "axios";
import jwt_decoder from "jwt-decode";
import moment from "moment";

const JWT_TOKEN_KEY = 'jwt-token';

export function setToken(token){
    localStorage.setItem(JWT_TOKEN_KEY, token);
}

export function getToken(){
    return localStorage.getItem(JWT_TOKEN_KEY);
}

export function removeToken(){
    localStorage.clear();
}

export function getRoleFromToken(){
    return decodeToken()?.role;
}

export function getAccountFromToken(){
    return decodeToken()?.sub;
}

export function hasTokenExpired(){
    return decodeToken()?.exp < moment().unix();
}

function decodeToken() {
    const token = getToken();
    return !!token ? jwt_decoder(token) : null;
}

export function setAxiosInterceptors(){
    Axios.interceptors.request.use(function (config) {
        const token = getToken();
        config.headers.Authorization = token ? `Bearer ${token}` : null;

        return config;
    })
}