import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../utils/fakaData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar, faCalendar, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'


const ShowDetails = () => {
    const param = useParams()
    const loader = useLoaderData()
    const [state, setState] = useState({})
    const handleBtn = id => {
        addToDb(id)
    }

    useEffect(() => {
        const singleData = loader.find(d => d.id == param.CardId)
        if (singleData) {
            setState(singleData)
        }
    }, [])

    return (
        <div>
            <h5 className='text-4xl font-extrabold text-center'>Job Details</h5>
            <div className='grid md:grid-cols-2 mb-10 px-16 mt-12 gap-20'>
                {/* right side div */}
                <div className='text-lg'>
                    <h4 className='mt-8'><span className='font-bold mt-12'>Job Description:</span> {state.description}</h4>
                    <h4 className='mt-8'><span className='font-bold mt-12'>Job Responsibility:</span> {state.responsibility}</h4>
                    <h4 className='mt-8'><span className='font-bold mt-12'>Educational Requirements:</span> {state.educational}</h4>
                    <h4 className='mt-8 mb-12'><span className='font-bold'>Experience:</span>  {state.experiences}</h4>
                </div>
                {/* right side div ends */}

                {/* left side div start */}
                <div >
                    <div className='bg-blue-100 p-5 rounded-xl w-96 shadow-lg mt-6'>
                        <h4 className='text-xl font-bold'>Job Details</h4>
                        <hr className='mt-6' />
                        <div className='flex gap-2 mt-6'>
                            <div className='flex items-center'>
                                <FontAwesomeIcon
                                    className='text-violet-600'
                                    icon={faDollar}
                                ></FontAwesomeIcon>
                                <div className='flex ml-1'>
                                    <h4> <span className='font-bold'>Salary</span>: </h4>
                                    <span>{state.salary} (Per Month)</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-2 mt-6'>
                            <div className='flex items-center'>
                                <FontAwesomeIcon
                                    className='text-violet-600'
                                    icon={faCalendar}
                                ></FontAwesomeIcon>
                                <div className='flex'>
                                    <h4 className='font-bold ml-1'>Job Title: </h4>
                                    <span>{state.title}</span>
                                </div>
                            </div>
                        </div>
                        <h4 className='font-bold text-xl mt-6' >Contact Information</h4>
                        <hr className='mt-5' />
                        <div className='mt-6  flex gap-2'>
                            <div className='flex items-center'>
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className='text-violet-600'
                                ></FontAwesomeIcon>
                                <div className='flex'>
                                    <h4> <span className='font-bold  ml-1'>Phone :</span></h4>
                                    <span>{state.Contact?.phone}</span>
                                </div>
                            </div>
                        </div>
                        <div className='mt-6 flex gap-2'>
                            <div className='flex items-center'>
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className='text-violet-600'
                                ></FontAwesomeIcon>
                                <div className='flex'>
                                    <div className='flex items-center'>
                                        <div className='flex'>
                                            <h4> <span className='ml-1 font-bold'>Email :</span></h4>
                                            <span>{state.Contact?.email}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-6 flex gap-2'>
                            <div className='flex items-center'>
                                <FontAwesomeIcon
                                icon={faLocationDot}
                                className='text-violet-600'
                                ></FontAwesomeIcon>
                                <div className='flex'>
                                    <h4><span className='font-bold ml-1'>Address :</span></h4>
                                    <span>{state.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:relative left-8 w-100%'>
                        <button onClick={() => handleBtn(state.id)} className=' header-btn mb-6 mt-8'>Apply Now</button>
                    </div>
                </div>
                {/* left side div end */}
            </div>
        </div >
    );
};

export default ShowDetails;