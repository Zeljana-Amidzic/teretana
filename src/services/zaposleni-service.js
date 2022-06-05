import { API_ZAPOSLENI } from "../api_routes";
import Axios from "axios";

export function getAllZaposlene(number, size, sort, keyword) {
  return Axios.get(API_ZAPOSLENI + `?pageNo=${number - 1}&pageSize=${size}&sortBy=${sort}&keyword=${keyword}`);
}

export function getByIdzaposleni(idkorisnik) {
  return Axios.get(API_ZAPOSLENI + `/${idkorisnik}`);
}

export function insertZaposleni(korisnik, callback) {
  Axios.post(API_ZAPOSLENI, korisnik).then((resp) => {
    callback();
  }).catch((e) => {
    console.log(e);
  });
}

export function updateZaposleni(korisnik, callback) {
  Axios.put(API_ZAPOSLENI + `/${korisnik.idkorisnik}`, korisnik).then(() => {
    callback();
  }).catch((e) => {
    console.log(e);
  });
}

export function deleteZaposleni(id) {
    return Axios.delete(API_ZAPOSLENI + `/${id}`);
}