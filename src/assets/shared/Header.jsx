import logo from '../../picture/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center my-5 space-y-4'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-2xl font-normal'> jurnalism without fear and fovour </p>
            <p>{moment().format("dddd, MMMM D, YYYY ")}</p>
        </div>
    );
};

export default Header;