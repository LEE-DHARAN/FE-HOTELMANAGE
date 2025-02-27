import axios from "axios";

const api = axios.create({
  //baseURL: "https://be-hotelmanage.onrender.com/api/",
  baseURL: "https:///localhost:3001/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
