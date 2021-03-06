import { API_KORISNIK } from "../api_routes";
import Axios from "axios";

export function getAllKorisnike(number, size, sort, keyword) {
  return Axios.get(API_KORISNIK + `?pageNo=${number - 1}&pageSize=${size}&sortBy=${sort}&keyword=${keyword}`);
}

export function getKorisnik(korisnickoime) {
  return Axios.get(API_KORISNIK + `/${korisnickoime}`);
}

export function insertKorisnik(korisnik) {
  Axios.post(API_KORISNIK, korisnik).then((resp) => {
    alert("Korisnik je dodat");
  }).catch((e) => {
    console.log(e);
  });
}

export function updateKorisnik(korisnik, idkorisnik) {
  Axios.put(API_KORISNIK+ `/${idkorisnik}`, korisnik).then(() => {
    alert("Korisnik je izmenjen");
  }).catch((e) => {
    console.log(e);
  });
}

export function deleteKorisnik(id) {
    return Axios.delete(API_KORISNIK + `/${id}`);
}