import { API_CLANARINA } from "../api_routes";
import Axios from "axios";

export function getAllClanarine(number, size, sort, keyword) {
  return Axios.get(API_CLANARINA + `?pageNo=${number - 1}&pageSize=${size}&sortBy=${sort}&keyword=${keyword}`);
}

export function insertclanarina(clanarina, callback) {
  Axios.post(API_CLANARINA, clanarina).then((resp) => {
    callback();
  }).catch((e) => {
    console.log(e);
  });
}

export function updateclanarina(clanarina, callback) {
  Axios.put(API_CLANARINA + `/${clanarina.idclanarina}`, clanarina).then(() => {
    callback();
  }).catch((e) => {
    console.log(e);
  });
}

export function deleteclanarina(id) {
    return Axios.delete(API_CLANARINA + `/${id}`);
}