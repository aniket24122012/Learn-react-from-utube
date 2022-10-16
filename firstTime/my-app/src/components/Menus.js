import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () => {
  return (
    <div>
      <ListGroup>
        <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/view-course" action>View Courses</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>Add Courses</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/contact" action>Contact</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/about-us" action>About us</Link>
      </ListGroup>
    </div>
  );
};
export default Menus;
