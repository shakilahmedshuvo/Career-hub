import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar } from '@fortawesome/free-solid-svg-icons'

const Card = ({ product }) => {
    const { id, name, logo, title, job, location, salary, time } = product;

    return (
        <div>
            {/* design section start */}
            <div
                className='w-full h-72 flex items-center shadow-2xl border-2 mt-6 p-2 gap-10'>
                <img
                    className='w-32 h-32'
                    src={logo}
                    alt="" />
                <div>
                    <h2
                        className='mt-4 font-bold text-3xl'>
                        {title}
                    </h2>
                    <h2
                        className='text-xl font-medium mt-4'>
                        {name}
                    </h2>
                    <div
                        className='flex mt-5'>
                        <h2
                            className='w-30 mr-5 border-violet-300 p-3 px-6 py-1 font-bold text-violet-400 border-2'>
                            {job?.first}
                        </h2>
                        <h2
                            className='w-30 border-violet-300 p-3 px-6 py-1 font-bold text-violet-400 border-2'>
                            {time?.second}
                        </h2>
                    </div>
                    <div className='mt-6 flex gap-10'>
                        <div
                            className='flex'>
                            <FontAwesomeIcon
                                className='text-gray-700 mt-1 mr-1 text-center'
                                icon={faLocationDot}
                            ></FontAwesomeIcon>
                            <p
                                className='text-gray-400'>
                                {location}
                            </p>
                        </div>
                        <div className='flex'>
                            <FontAwesomeIcon
                                className='text-gray-700 mt-1 mr-1 text-center'
                                icon={faDollar}
                            ></FontAwesomeIcon>
                            <p
                                className='text-gray-400'>
                                Salary: {salary}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='items-center flex-end'>
                    <Link
                        to={`/ShowDetails/${id}`}>
                        <button
                            className='header-btn'>
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
            {/* design section end */}

        </div>
    );
};

export default Card;