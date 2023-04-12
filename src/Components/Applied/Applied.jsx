import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../CardData/Card';

const Applied = () => {
    const { initialCart } = useLoaderData();
    return (
        <div>
            {/* banner section start */}
            <div className='mt-12 px-12'>
                <img className='h-full w-full shadow-lg' src="https://img.freepik.com/free-vector/v915_53876-174949.jpg?w=826&t=st=1681283547~exp=1681284147~hmac=7e0de47d849ca5e20aef5cdf0d89e9d206da9e4ba60a94722343c8487a79a937" alt="" />
            </div>
            {/* banner section end */}
            <div>
                <h1 className='text-2xl mt-10 font-medium text-center'>Applied <span className='text-blue-300'>Jobs</span></h1>
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