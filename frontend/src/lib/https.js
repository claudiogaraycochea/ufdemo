import axios from "axios";
import { API } from "../store/config";

export const ContentTypes = {
  json: 'application/json',
  formData: 'multiplart/form-data',
  html: 'text/html',
};

// More info: https://github.com/axios/axios
export function request(method, endpoint, data = {}, headers = { 'content-type': ContentTypes.json, 'Access-Control-Allow-Origin': true }, other) {
  const url = `${API}${endpoint}`;
  const options = {
    method,
    url,
    data,
    headers,
    ...other,
  };
  return axios(options);
}