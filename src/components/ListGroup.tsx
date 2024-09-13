import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
}
function ListGroup({ items, heading }: Props) {
  //Hook funtion-this is state hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Event handler
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </> //Fragment can be written as empty brackets also
  );
}

export default ListGroup;
