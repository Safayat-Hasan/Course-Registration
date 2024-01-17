import { useState } from 'react'
import './App.css'
import Course_carts from './components/Course_carts/Course_carts'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [carts,setCarts]=useState([]);
  const [credit, setCredit] = useState(0);

  const showToast = () => {
    toast.error('Cannot add same course twice or more course than 20 credit', {
      position: 'top-center', // Set the toast position
      autoClose: 3000, // Auto close the toast after 3 seconds
    });
  };
  
  
  const handleCourseCart = (course, newCredit) => {
    const itemIndex = carts.findIndex(item=>item.id===course.id);
    if (itemIndex===-1 && credit+newCredit<=20){
      const newCourses = [...carts, course]
      setCarts(newCourses);
      setCredit(credit+newCredit);
    }
    else{
      showToast()
    }
    
  }


  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Courses handleCourseCart={handleCourseCart}></Courses>
        <Course_carts carts={carts} credit={credit}></Course_carts>
        <ToastContainer />
      </div>
      
    </>
  )
}

export default App
