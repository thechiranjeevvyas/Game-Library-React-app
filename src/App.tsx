// //import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["Delhi", "Mumbai", "Kolkata", "Banglore", "Chennai"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />{" "}
//     </div>
//   );
// }
// export default App;
import Alert from "./components/Alert";
function App() {
  return (
    <div>
      <Alert>
        Hehe i <span>have learnt it</span>
      </Alert>
    </div>
  );
}
export default App;
