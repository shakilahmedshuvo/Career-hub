import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../CardData/Card';

const Applied = () => {
    const { initialCart } = useLoaderData();
    return (
        <div>
            <div>
                <h1 className='text-4xl mt-10 font-extrabold text-center'>Applied <span className='text-blue-400'>Jobs</span></h1>
            </div>
            <div className='mx-30'>
                {/* details section start */}
                {
                    initialCart.map(product => <Card
                        product={product}
                        key={product.id}
                    ></Card>)
                }
                {/* details section end */}
            </div>
        </div>
    );
};

export default Applied;