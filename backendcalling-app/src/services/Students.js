// import axios from "axios";
import studentApi from "../api/studentApi";

export const readStudents = async (pageNumber, pageSize) => {
  try {
    const response = await studentApi.get("/page", {
      params: {
        pageNumber: pageNumber,
        pageSize: pageSize,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createStudent = async (studentData) => {
  try {
    // Axios expects the data payload object directly as the second argument
    await studentApi.post("/create", studentData);
    return true;
  } catch (error) {
    console.log
    console.log(error);
    return false;
  }
};
