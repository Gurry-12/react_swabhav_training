import { useRef, useState } from "react";
import { createStudent } from "../services/Students";

const AddStudent = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 1. Create separate refs for each input DOM element
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const deptRef = useRef(null);

  const addStudent = async (event) => {
    event.preventDefault();

    // 2. Extract the actual values from the DOM nodes
    const studentData = {
      fullName: nameRef.current.value,
      age: Number(ageRef.current.value), // Convert string input to number
      department: deptRef.current.value,
    };

    // 3. Send the clean payload data to your API function
    const success = await createStudent(studentData);

    if (success) {
      setIsOpen(false); // Close modal on success
    }
  };

  return (
    <div className="add-student-container">
      <button
        type="button"
        className="btn-create"
        onClick={() => setIsOpen(true)}
      >
        + Create Student
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="form-card">
            <div className="card-header">
              <h3>Add New Student</h3>
              <button
                type="button"
                className="btn-close"
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>
            </div>

            <form className="student-form" onSubmit={addStudent}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="e.g. John Doe"
                  ref={nameRef} /* Fixed ref assignment */
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  placeholder="e.g. 21"
                  ref={ageRef} /* Fixed ref assignment */
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="department">Department</label>
                <input
                  type="text"
                  id="department"
                  placeholder="e.g. Computer Science"
                  ref={deptRef} /* Fixed ref assignment */
                  required
                />
              </div>

              <div className="card-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddStudent;
