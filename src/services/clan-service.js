import { API_CLAN } from "../api_routes";
import Axios from "axios";

export function getAllClanove(number, size, sort, keyword) {
  return Axios.get(API_CLAN + `?pageNo=${number - 1}&pageSize=${size}&sortBy=${sort}&keyword=${keyword}`);
}

export function getByIdclan(idclan) {
  return Axios.get(API_CLAN + `/${idclan}`);
}

export function insertClan(korisnik) {
  Axios.post(API_CLAN, korisnik).then((resp) => {
    alert("Clan je dodat");
  }).catch((e) => {
    console.log(e);
  });
}

export function updateClan(korisnik) {
  Axios.put(API_CLAN + `/${korisnik.idclan}`, korisnik).then(() => {
    alert("Clan je izmenjen");
  }).catch((e) => {
    console.log(e);
  });
}

export function deleteClan(id) {
    return Axios.delete(API_CLAN + `/${id}`);
}