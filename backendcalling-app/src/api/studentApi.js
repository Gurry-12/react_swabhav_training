import axios from "axios";

const studentApi = axios.create({
  baseURL: "http://localhost:8080/api/students"
});

export default studentApi;
