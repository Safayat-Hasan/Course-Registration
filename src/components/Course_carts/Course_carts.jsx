import PropTypes from 'prop-types';
import Course_cart from '../Course_cart/Course_cart';

const Course_carts = ({carts, credit}) => {
    return (
        <div className="md:w-1/3 bg-white rounded-xl mb-6">
            <h2 className="text-lg text-[#2F80ED] ml-6 font-bold mb-5 mt-4">Credit Hour Remaining {20-credit} hr</h2>
            <hr className='mx-6 h-[1px]' />
            <h2 className="text-xl ml-6 font-bold mb-5 mt-4">Course Name</h2>
            {
                carts.map((cart, idx)=> <Course_cart key={idx} cart={cart}></Course_cart>)
            }
            <hr className='mx-6 h-[1px]' />
            <h2 className="text-base font-medium ml-6 mb-5 mt-4">Total Credit Hour : {credit}</h2>
        </div>
        
    );
};

Course_carts.propTypes={
    carts: PropTypes.object.isRequired,
    credit: PropTypes.number
}

export default Course_carts;