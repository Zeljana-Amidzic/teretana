import http from "../http-common";

import { API_KORISNIK } from "../api_routes";
import axios from "axios";
import authHeader from "./auth-header";

class KorisnikService {
  getAll(){
    //return http.get("/korisnik");
    return axios.get(API_KORISNIK, {headers: authHeader()});
  }

  getAllKorisnike(number, size, sort, keyword){
    return http.get(`/korisnik?pageNo=${number - 1}&pageSize=${size}&sortBy=${sort}&keyword=${keyword}`);
  }

  create(korisnik){
    return http.post("/korisnik", korisnik);
  }

  update(korisnik, id){
    return http.put(`/korisnik/${id}`, korisnik);
  }

  delete(id){
    return http.delete(`/korisnik/${id}`);
  }
}

export default new KorisnikService;