import React from 'react';

const Card = ({ product }) => {
    const { id, name, logo, title, job, location, salary, time } = product;

    return (
        <div>
            {/* design section start */}
            <div className='w-full h-72 flex items-center shadow-2xl border-2 mt-6 p-2 gap-10'>
                <img src={logo} alt="" />
                <div>
                    <h2 className='mt-4 font-bold text-3xl'>{title}</h2>
                    <h2 className=''>{time}</h2>
                </div>
            </div>
            {/* design section end */}
        </div>
    );
};

export default Card;