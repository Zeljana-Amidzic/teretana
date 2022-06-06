import { API_VEZBA } from "../api_routes";
import Axios from "axios";

/*export function getAllVezbe(number, size, sort, keyword) {
  return Axios.get(API_VEZBA + `?pageNo=${number-1}&pageSize=${size}&sortBy=${sort}&keyword=${keyword}`);
}*/

export function getAllVezbe(){
  return Axios.get(API_VEZBA);
}

export function insertVezba(vezba) {
  Axios.post(API_VEZBA, vezba).then((resp) => {
    alert("Vezba je dodata");
  }).catch((e) => {
    console.log(e);
  });
}

export function updateVezba(vezba, callback) {
  Axios.put(API_VEZBA + `/${vezba.idvezba}`, vezba).then(() => {
    alert("Vezba je izmenjena");
  }).catch((e) => {
    console.log(e);
  });
}

export function deleteVezba(id) {
    return Axios.delete(API_VEZBA + `/${id}`);
}