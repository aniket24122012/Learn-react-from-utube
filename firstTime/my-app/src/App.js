import "./App.css";
import Title from "./components/Title";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import AllCourse from "./components/AllCourse";
import { Col, Container, Row } from "reactstrap";
import Menus from "./components/Menus";
import Home from "./components/Home";

function App() {
  return (
    //grid System

    <Router>
      <div >
        <Container>
          <Title />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
                <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/view-course" element={<AllCourse/>}></Route>
                </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
