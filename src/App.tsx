import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Delhi", "Mumbai", "Kolkata", "Banglore", "Chennai"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />{" "}
    </div>
  );
}
export default App;
