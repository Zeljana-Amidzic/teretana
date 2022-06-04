import { API_PLAN } from "../api_routes";
import Axios from "axios";

export function getAllPlanove(number, size, sort, keyword) {
  return Axios.get(API_PLAN + `?pageNo=${number - 1}&pageSize=${size}&sortBy=${sort}&keyword=${keyword}`);
}

export function insertPlan(plan, callback) {
  Axios.post(API_PLAN, plan).then((resp) => {
    callback();
  }).catch((e) => {
    console.log(e);
  });
}

export function updatePlan(plan, callback) {
  Axios.put(API_PLAN + `/${plan.idplan}`, plan).then(() => {
    callback();
  }).catch((e) => {
    console.log(e);
  });
}

export function deletePlan(id) {
    return Axios.delete(API_PLAN + `/${id}`);
}