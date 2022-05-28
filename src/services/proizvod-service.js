import { API_PROIZVOD } from "../api_routes";
import axios from "axios";
import authHeader from "./auth-header";

const getAll = () => {
  return axios.get(API_PROIZVOD);
}

const getAllProizvode = (number, size, sort, keyword) =>  {
  return axios.get(API_PROIZVOD + `/?pageNo=${number - 1}&pageSize=${size}&sortBy=${sort}&keyword=${keyword}`, { headers: authHeader() });
}

const insertProizvod = (proizvod) => {
  return axios.post(API_PROIZVOD, proizvod, { headers: authHeader() });
}

const updateProizvod = (proizvod, id) => {
  return axios.put(API_PROIZVOD + `/${id}`, proizvod, { headers: authHeader() });
}

const deleteProizvod = (id) => {
    return axios.delete(API_PROIZVOD + `/${id}`, { headers: authHeader() });
}

const proizvodService = {
  getAll,
  getAllProizvode,
  insertProizvod,
  updateProizvod,
  deleteProizvod,
}

export default proizvodService;