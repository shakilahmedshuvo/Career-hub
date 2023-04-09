import React from 'react';

const ShowData = ({ data }) => {
    const { name, jobs, img } = data;
    return (
        <div className='p-5 '>
            {/* banner card section start */}
            <div className='rounded-xl w-45 bg-indigo-100 p-1 '>
                <div className='mt-10 relative top-2 ml-4'>
                    <img className='w-14' src={img} alt="" />
                </div>
                <div className='text-start mt-8 ml-4 pb-8'>
                    <span className='font-bold'>{name}</span>
                    <br />
                    <span className='text-gray-400'>{jobs}</span>
                </div>
            </div>
            {/* banner card section start */}
        </div>
    );
};

export default ShowData;