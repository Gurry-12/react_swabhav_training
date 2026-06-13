import axios from "axios";


const employeeApi = axios.create({
  baseURL: 'http://localhost:8080/api/employees',
});

export default employeeApi