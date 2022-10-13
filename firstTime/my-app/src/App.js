import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Course from './components/course';

function App() {
  return (
    //How to add CSS through object interploation
  <div style={{background : 'yellow' , padding:'20px', marginTop:'20px'}}>
      <Course name="Java" desc="basic are covered here !!" price="3000"/>
  </div>
  );
}

export default App;
