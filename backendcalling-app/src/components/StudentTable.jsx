const StudentTable = ({ students }) => {
  return (
    <>
      {students && students.length > 0 ? (
        /* Added the className here to match our CSS */
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              return (
                <tr key={student.id}>
                  <td>{student.fullName}</td>
                  <td>{student.age}</td>
                  <td>{student.department}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        /* Wrapped in a styled div for a cleaner empty-state look */
        <div className="no-records">No records found</div>
      )}
    </>
  );
};

export default StudentTable;
