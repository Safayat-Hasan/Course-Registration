import { useState } from 'react'
import './App.css'
import Course_carts from './components/Course_carts/Course_carts'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {

  const [carts,setCarts]=useState([]);
  const [credit, setCredit] = useState(0);
  
  const handleCourseCart = (course, newCredit) => {
    const newCourses = [...carts, course]
    setCarts(newCourses);
    setCredit(credit+newCredit);
  }


  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Courses handleCourseCart={handleCourseCart}></Courses>
        <Course_carts carts={carts} credit={credit}></Course_carts>
      </div>
      
    </>
  )
}

export default App
