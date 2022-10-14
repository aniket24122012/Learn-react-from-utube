import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Course from './components/course';
import AllCourse from './components/AllCourse';



function App() {

  return (
    //How to add CSS through object interploation
  <div style={{background : 'yellow' , padding:'20px', marginTop:'20px'}}>
      <AllCourse/>
  </div>

  );
}

export default App;
