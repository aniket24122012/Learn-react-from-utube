import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Course from './components/course';
import { ToastContainer, toast } from 'react-toastify';
import { Button } from 'reactstrap';


function App() {
  const notify = () => toast.success('🦄 Wow so easy!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  return (
    //How to add CSS through object interploation
  <div style={{background : 'yellow' , padding:'20px', marginTop:'20px'}}>
      <Course name="Java" desc="basic are covered here !!" price="3000"/>
      <Button color='primary' onClick={notify}>toastify</Button>
      <ToastContainer />
  </div>

  );
}

export default App;
