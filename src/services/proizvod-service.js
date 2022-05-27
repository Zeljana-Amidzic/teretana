import http from "../http-common";

class ProizvodService {
  getAll(){
    return http.get("/proizvod");
  }

  getAllProizvode(number, size, sort, keyword){
    return http.get(`/proizvod?pageNo=${number - 1}&pageSize=${size}&sortBy=${sort}&keyword=${keyword}`);
  }

  create(proizvod){
    return http.post("/proizvod", proizvod);
  }

  update(proizvod, id){
    return http.put(`/proizvod/${id}`, proizvod);
  }

  delete(id){
    return http.delete(`/proizvod/${id}`);
  }
}

export default new ProizvodService;