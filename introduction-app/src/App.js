import logo from './logo.svg';
import './App.css';
import First from './Components/First';
import demoLocations from './data/demoLocations';
import Users from './data/userList';
import Info from './Components/Info';
function App() {
  return (
    <>
    <div style={{ margin: "40px" }}>
			<h1 style={{ color: "green" }}> Geeks For Geeks </h1>

			<p> Mapping Data to component in React js. </p>
      {Users.map( (e) => {
        return  <Info name = {e.name} rollNo = {e.rollNo} ></Info>;
      }) }
        </div>

    <div>First: React App</div>

    {demoLocations.map(
      (d) => {
        return <First city={d.city} />;
      }
    )}
    </>
  );
}

export default App;
