import './App.css'
import Course_cart from './components/Course_cart/Course_cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {
  

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Courses></Courses>
        <Course_cart></Course_cart>
      </div>
      
    </>
  )
}

export default App
