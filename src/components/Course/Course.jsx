import PropTypes from 'prop-types';
import { FaDollarSign, FaBookOpen } from 'react-icons/fa';

const Course = ({course, handleCourseCart}) => {

    const {course_name, course_description, course_img, credit, price} = course;

    return (
        <div className='bg-white mr-6 p-4 mb-6 rounded-xl'>
            <img className='mb-4' src={course_img} alt="" />
            <h3 className='font-semibold text-lg mb-3'>{course_name}</h3>
            <p className='text-sm text-[#1C1B1B99] mb-5'>{course_description}</p>
            <div className='flex justify-between mb-6'>
                <div className='flex items-center mr-2'>
                    <FaDollarSign className=''></FaDollarSign>
                    <span className='text-[#1C1B1B99]'> Price : {price}</span>
                </div>
                <div className='flex items-center'>
                    <FaBookOpen className=''></FaBookOpen>
                    <span className='text-[#1C1B1B99]'>Credit : {credit}hr</span>
                </div>
            </div>
            <button onClick={()=>handleCourseCart(course, credit)} className='justify-center bg-[#2F80ED] text-white font-semibold text-lg w-full rounded-lg py-2'>Select</button>
        </div>
    );
};

Course.propTypes={
    course: PropTypes.object.isRequired,
    handleCourseCart: PropTypes.func.isRequired,
    handleCredit: PropTypes.func.isRequired
}

export default Course;