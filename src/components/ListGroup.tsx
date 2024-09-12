import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";
function ListGroup() {
  let items = ["Delhi", "Mumbai", "Kolkata", "Banglore", "Chennai"];
  let selectedIndex = 0;

  //Event handler
  const handleCLick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item active"
            key={item}
            onClick={handleCLick}
          >
            {item}
          </li>
        ))}
      </ul>
    </> //Fragment can be written as empty brackets also
  );
}

export default ListGroup;
