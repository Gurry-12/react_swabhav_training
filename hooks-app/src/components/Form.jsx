import { useRef, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const city = useRef("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    console.log(city.current.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input type="text" placeholder="enter your city" ref={city} />
        <button
          type="button"
          value={"Hello"}
          onClick={(event) => {
            handleSubmit(event);
          }}
        >
          Click Me
        </button>
      </form>
      <br />
      {name}
    </div>
  );
};

export default Form;
