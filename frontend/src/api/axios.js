import axios from "axios";

const client = axios.create({
  baseURL: "https://doc-alojaientos.onrender.com/api",
  withCredentials: true,
});

export default client;
