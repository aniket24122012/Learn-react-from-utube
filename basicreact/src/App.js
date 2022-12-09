import Header from "./components/Header";
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Products from "./components/Products";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product/:id" element={<Products/>}/>
      </Routes>
    </Router>
  );
}

export default App;
