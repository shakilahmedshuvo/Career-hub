import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    const { id, name, logo, title, job, location, salary, time } = product;

    return (
        <div>
            {/* design section start */}
            <div className='w-full h-72 flex items-center shadow-2xl border-2 mt-6 p-2 gap-10'>
                <img className='w-32 h-32' src={logo} alt="" />
                <div>
                    <h2 className='mt-4 font-bold text-3xl'>{title}</h2>
                    <h2 className='text-xl font-medium mt-4'>{name}</h2>
                    <div>
                        <h2 className='w-30 text-gray-400 border-sky-300 p-3'>{job?.first}</h2>
                        <h2 className='w-30 text-gray-400 border-sky-300 p-3'>{time?.second}</h2>
                    </div>
                    <div className='mt-6 flex gap-10'>
                        <div className='flex'>
                            <p className='text-gray-400'>{location}</p>
                        </div>
                        <div>
                            <p className='text-gray-400'>Salary: {salary}</p>
                        </div>
                    </div>
                </div>
                <Link to={`/ShowDetails/${id}`}><button className='header-btn'>View Detailes</button></Link>
            </div>
            {/* design section end */}

        </div>
    );
};

export default Card;