import "./App.css";
import Title from "./components/Title";
import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import AllCourse from "./components/AllCourse";
import { Col, Container, Row } from "reactstrap";
import Menus from "./components/Menus";
import Home from "./components/Home";
import AddCourse from "./components/AddCourse";
import Hooks from "./components/Hooks";

function App() {
  return (
    //grid System

    <Router>
      <div >
        <Container>
          <Title />
          <Hooks />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
                <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/view-course" element={<AllCourse/>}></Route>
                <Route path="/add-course" element={<AddCourse/>}></Route>
                </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;