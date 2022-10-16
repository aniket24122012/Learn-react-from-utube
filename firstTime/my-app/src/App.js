import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Course from "./components/course";
import AllCourse from "./components/AllCourse";
import { Col, Container, Row } from "reactstrap";
import Menus from "./components/Menus";

function App() {
  return (
    //grid System
    <div >
      <Title />
      <Container>
        <Row>
          <Col md={4}>
            <Menus />
          </Col>
          <Col md={8}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
