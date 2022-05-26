import http from "../http-common";

class KorisnikService {
  getAll(){
    return http.get("/korisnik");
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