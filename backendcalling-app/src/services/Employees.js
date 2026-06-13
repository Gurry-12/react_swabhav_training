
import employeeApi from "../api/employeeApi"


export const readEmployees = () => {

    employeeApi.get()
}