import PropTypes from 'prop-types';
// import { useState } from 'react';
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import showToast from '../Course_carts/Course_carts'

const Course_cart = ({cart}) => {
    const {course_name}=cart;
    // const [index, setIndex]=useState(1)
    // const increaseIndex = () => {
    //     setIndex(index + 1);
    //     // return index;
    // };
    
    // const idArray = [];

    // const updateArray = id =>{
    //     idArray.push(id);
    //     console.log(idArray);
    // }

    // updateArray()

    // const showToastTwo = () => {
    //     toast.error('Cannot add same course twice', {
    //       position: 'top-center', // Set the toast position
    //       autoClose: 3000, // Auto close the toast after 3 seconds
    //     });
    // };
    
    return (
        <div className='rounded-xl'>
            <h3 className='text-base text-[#1C1B1B99] ml-6 mb-3'>{course_name}</h3>
            <ToastContainer />
        </div>
        
    );
    
};


Course_cart.propTypes={
    cart: PropTypes.object.isRequired,
}

export default Course_cart;