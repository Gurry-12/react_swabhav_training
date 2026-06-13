import "./App.css";
import { employees } from "./data/employees";
import TeamSection from "./components/TeamSection";

function App() {
  const departments = [
    ...new Set(
      employees.map(
        (employee) => employee.department
      )
    ),
  ];

  return (
    <div className="container">

      <div className="header">
        <h1>TechNova Team Directory</h1>

        <p>
          {employees.length} employees across{" "}
          {departments.length} departments
        </p>
      </div>

      {departments.map((department) => {
        const members = employees.filter(
          (employee) =>
            employee.department === department
        );

        return (
          <TeamSection
            key={department}
            department={department}
            members={members}
          />
        );
      })}
    </div>
  );
}

export default App;