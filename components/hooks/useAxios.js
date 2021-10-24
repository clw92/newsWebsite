import { useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

/*let url = "http://localhost:1337/auth/local";*/
let url = "https://peaceful-stream-60012.herokuapp.com/articles/";



export default function useAxios() {
 const [auth] = useContext(AuthContext);

 const apiClient = axios.create({
  baseURL: url,
 });

 apiClient.interceptors.request.use(function (config) {
  const token = auth.jwt;
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
 });

 return apiClient;
}
