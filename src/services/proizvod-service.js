import { API_PROIZVOD } from "../api_routes";
import Axios from "axios";

/*export function getAllProizvode(number, size, sort, keyword) {
  return Axios.get(API_PROIZVOD + `?pageNo=${number - 1}&pageSize=${size}&sortBy=${sort}&keyword=${keyword}`);
}*/

export function getAllProizvode(){
  return Axios.get(API_PROIZVOD);
}

export function getProizvodById(id){
  return Axios.get(API_PROIZVOD + '/' + id);
}

export function insertProizvod(proizvod) {
  Axios.post(API_PROIZVOD, proizvod).then((resp) => {
    alert("Proizvod je dodat");
  }).catch((e) => {
    console.log(e);
  });
}

export function updateProizvod(proizvod, idproizvod) {
  Axios.put(API_PROIZVOD + `/${idproizvod}`, proizvod).then(() => {
    alert("Proizvod je izmenjen");
  }).catch((e) => {
    console.log(e);
  });
}

export function deleteProizvod(id) {
    return Axios.delete(API_PROIZVOD + `/${id}`);
}