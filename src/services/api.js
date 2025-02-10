import axios from "axios";

const api = axios.create({
  baseURL: "https://be-hotelmanage.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
