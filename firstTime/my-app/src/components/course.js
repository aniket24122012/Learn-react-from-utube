import React from "react";
import { Card, CardBody, CardTitle, CardText, CardHeader } from "reactstrap";
const Course = ({ course }) => {
  return (
    <div>
      <Card
        className="my-2"
        color="warning"
        inverse
        style={{
          width: "18rem",
        }}
      >
        <CardHeader>{course.title}</CardHeader>
        <CardBody>
          <CardTitle tag="h5">{course.desc}</CardTitle>
          <CardText>{course.price}</CardText>
        </CardBody>
      </Card>
      <hr />
    </div>
  );
};
export default Course;
