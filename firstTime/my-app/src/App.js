import logo from './logo.svg';
import './App.css';
import Title from './components/Title';

function App() {
  return (
    //How to add CSS through object interploation
  <div style={{background : 'yellow' , padding:'20px', marginTop:'20px'}}>
      <h1>Aniket Kandrikar</h1>
      <Title />
  </div>
  );
}

export default App;
