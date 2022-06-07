import { API_KUPOVINA } from "../api_routes";
import Axios from "axios";

/*export function getAllProizvode(number, size, sort, keyword) {
  return Axios.get(API_PROIZVOD + `?pageNo=${number - 1}&pageSize=${size}&sortBy=${sort}&keyword=${keyword}`);
}*/

export function getAllKupovine(){
  return Axios.get(API_KUPOVINA);
}

export function getKupovinaById(id){
  return Axios.get(API_KUPOVINA + '/' + id);
}

export function insertKupovina(kupovina) {
  Axios.post(API_KUPOVINA, kupovina).then(() => {
    //alert("Proizvod je dodat");
    console.log("Insert kupovina");
  }).catch((e) => {
    console.log(e);
  });
}

export function deleteKupovina(id) {
    return Axios.delete(API_KUPOVINA + `/${id}`);
}