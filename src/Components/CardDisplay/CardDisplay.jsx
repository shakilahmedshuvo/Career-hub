import React from 'react';
import './CardDisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faDollar} from '@fortawesome/free-solid-svg-icons'


const CardDisplay = ({ cards }) => {
    console.log(cards);
    const { logo, title, name, job, time, location, salary } = cards;
    return (
        <div className='w-full h-full border shadow-xl p-6 card'>
            {/* feature jobs section start */}
            <div>
                <div>
                    <img className='cardImg w-12 mt-3 ml-2' src={logo} alt="" />
                    <h2 className='mt-5 font-bold'>{title}</h2>
                    <h4 className='text-gray-400 mt-1'>{name}</h4>
                </div>
                <div className='flex mt-4'>
                    <div className='mr-5 px-6 py-1 font-bold text-violet-400 border-2 border-violet-400'>{job.first}</div>
                    <div className='px-3 py-1 text-violet-400 font-semibold border-2 border-violet-400'>{time.second}</div>
                </div>
            </div>
            <div className='flex mt-8'>
                <div className='flex text-gray-400 card-info'>
                    <FontAwesomeIcon
                        className='mt-1 mr-1'
                        icon={faLocationDot} />
                    <p>{location}</p>
                    <FontAwesomeIcon
                        className='mt-1 mr-1'
                        icon={faDollar} />
                    <p>Salary: {salary}</p>
                </div>
            </div>
            <div>
                <button className='card-btn mt-5'>View Details</button>
            </div>
            {/* feature jobs section end */}
        </div>
    );
};

export default CardDisplay;