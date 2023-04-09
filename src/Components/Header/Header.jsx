import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-around mt-10'>
            <h1 className='font-bold text-2xl'>Job Hub</h1>
            <div>
                <Link className='mx-6 font-medium' to='./'>Home</Link>
                <Link className='mx-6 font-medium' to='/statistics'>Statistics</Link>
                <Link className='mx-6 font-medium' to='/applied'>Applied Jobs</Link>
                <Link className='mx-6 font-medium' to='/blog'>Blog</Link>
            </div>
            <button className=''>Star Applying</button>
        </div>
    );
};

export default Header;