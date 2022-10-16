import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Container } from "reactstrap";
const AddCourse = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="userId">Id</Label>
          <Input
            type="text"
            name="userId"
            id="userId"
            placeholder="Enter user id..."
          />
        </FormGroup>
        <FormGroup>
          <Label for="userName">Course Name</Label>
          <Input
            type="text"
            name="userName"
            id="userNAme"
            placeholder="Enter user name..."
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            type="text"
            name="price"
            id="price"
            placeholder="Enter price..."
          />
        </FormGroup>
        <FormGroup>
          <Label for="desc">Decsription</Label>
          <Input
            type="text"
            name="desc"
            id="desc"
            placeholder="Enter description..."
            style={{height:150}}
          />
        </FormGroup>
        <Container>
            <Button>Submit</Button>
        </Container>
      </Form>
    </div>
  );
};
export default AddCourse;
