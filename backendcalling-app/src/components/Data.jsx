import axios from "axios";

const Data = () => {
  //const [data, setData] = useState([])

  const readData = async () => {
    // fetch
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // console.log(response)

    // const data = await response.json()

    // console.log(data);

    // axios

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );

    console.log(response.Data);
  };

  return (
    <div>
      <button type="button" onClick={readData}>
        read data
      </button>
    </div>
  );
};

export default Data;
