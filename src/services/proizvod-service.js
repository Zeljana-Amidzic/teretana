import { API_PROIZVOD } from "../api_routes";
import Axios from "axios";

/*export function getAllProizvode(number, size, sort, keyword) {
  return Axios.get(API_PROIZVOD + `?pageNo=${number - 1}&pageSize=${size}&sortBy=${sort}&keyword=${keyword}`);
}*/

export function getAllProizvode(){
  return Axios.get(API_PROIZVOD);
}

export function insertProizvod(proizvod, callback) {
  Axios.post(API_PROIZVOD, proizvod).then((resp) => {
    callback();
  }).catch((e) => {
    console.log(e);
  });
}

export function updateProizvod(proizvod, callback) {
  Axios.put(API_PROIZVOD + `/${proizvod.idproizvod}`, proizvod).then(() => {
    callback();
  }).catch((e) => {
    console.log(e);
  });
}

export function deleteProizvod(id) {
    return Axios.delete(API_PROIZVOD + `/${id}`);
}