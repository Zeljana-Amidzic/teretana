import { API_ZAPOSLENI } from "../api_routes";
import Axios from "axios";

export function getAllZaposlene(number, size, sort, keyword) {
  return Axios.get(API_ZAPOSLENI + `?pageNo=${number - 1}&pageSize=${size}&sortBy=${sort}&keyword=${keyword}`);
}

export function getByIdzaposleni(idkorisnik) {
  return Axios.get(API_ZAPOSLENI + `/${idkorisnik}`);
}

export function insertZaposleni(korisnik) {
  Axios.post(API_ZAPOSLENI, korisnik).then((resp) => {
    alert("Korisnik je dodat");
  }).catch((e) => {
    console.log(e);
  });
}

export function updateZaposleni(korisnik) {
  Axios.put(API_ZAPOSLENI + `/${korisnik.idkorisnik}`, korisnik).then(() => {
    alert("Korisnik je izmenjen");
  }).catch((e) => {
    console.log(e);
  });
}

export function deleteZaposleni(id) {
    return Axios.delete(API_ZAPOSLENI + `/${id}`);
}