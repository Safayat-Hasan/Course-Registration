import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Course_cart = ({cart}) => {
    const {course_name}=cart;
    const [index, setIndex]=useState(1)
    // const increaseIndex = () => {
    //     setIndex(index + 2);
    //     console.log(index);
    // };
    


    useEffect(()=>{
        setIndex(index+1);
        console.log(index);
    },[])
    
    return (
        <div className='rounded-xl'>
            <h3 className='text-base text-[#1C1B1B99] ml-6 mb-3'>{course_name}</h3>
        </div>
        
    );
    
};


Course_cart.propTypes={
    cart: PropTypes.object.isRequired
}

export default Course_cart;