import axios from "axios";
//api teste https://testes-laudemir.herokuapp.com
//api anderson https://tranqly.herokuapp.com/ 
const api = axios.create({
  baseURL: "https://testes-laudemir.herokuapp.com",
});
export default api;
