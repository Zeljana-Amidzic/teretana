import { API_PLAN } from "../api_routes";
import Axios from "axios";

export function getAllPlanove(number, size, sort, keyword) {
  return Axios.get(API_PLAN + `?pageNo=${number - 1}&pageSize=${size}&sortBy=${sort}&keyword=${keyword}`);
}

export function insertPlan(plan) {
  Axios.post(API_PLAN, plan).then((resp) => {
    alert("Plan je dodat");
  }).catch((e) => {
    console.log(e);
  });
}

export function updatePlan(plan) {
  Axios.put(API_PLAN + `/${plan.idplan}`, plan).then(() => {
    alert("Plan je izmenjen");
  }).catch((e) => {
    console.log(e);
  });
}

export function deletePlan(id) {
    return Axios.delete(API_PLAN + `/${id}`);
}