import axios from "axios";

const api = axios.create({
  baseURL: "https://tranqly.herokuapp.com",
});
export default api;
