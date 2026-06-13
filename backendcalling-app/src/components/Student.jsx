import { useState } from "react";
import { readStudents } from "../services/Students"
import StudentTable from "./StudentTable";
import AddStudent from "./AddStudent";


const Student = () => {

    const [students , setStudents] = useState([])
    const getStudent = async () => {

        const response = await readStudents(0, 10);

        setStudents(response.content)
        console.log(response.content)
    }
  return (
    <div className="student-container">
      <div className="action-bar">
        <button type="button" className="btn-fetch" onClick={getStudent}>
          Get Students
        </button>

        {/* Calling your newly created AddStudent component */}
        <AddStudent></AddStudent>
      </div>

      {/* Pass the class down to the actual <table> inside this component */}
      <StudentTable students={students} className="student-table" />
    </div>
  );
}

export default Student