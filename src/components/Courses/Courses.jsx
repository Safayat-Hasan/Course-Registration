import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';


const Courses = ({handleCourseCart}) => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-3">
                {
                    courses.map(course => <Course key={course.id} course={course} handleCourseCart={handleCourseCart}></Course>)
                }
            </div>
        </div>
    );
};

Courses.propTypes={
    handleCourseCart: PropTypes.func.isRequired
}

export default Courses;