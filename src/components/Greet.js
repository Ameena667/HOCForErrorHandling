import UpdatedComponent from "./UpdatedComponent";

const Greet = (props) => {
  const { age, ageUpdate } = props;
  //const [tempAge, setTempAge] = useState(age);
  if (parseInt(age) < 0) {
    throw new Error("Explicit Error from greet .......");
  }

  return (
    <div>
      <label>Enter Age:</label>
      <input onChange={(e) => ageUpdate(e.target.value)} />

      <p>Age is : {age}</p>
    </div>
  );
};

export default UpdatedComponent(Greet);
