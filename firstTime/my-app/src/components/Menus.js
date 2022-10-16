import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem tag="a" href="/" action>
          Home
        </ListGroupItem>
        <ListGroupItem tag="a" href="/view-course" action>
          Add Course
        </ListGroupItem>

        <ListGroupItem tag="a" href="#" action>
          About us
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Contact
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};
export default Menus;
