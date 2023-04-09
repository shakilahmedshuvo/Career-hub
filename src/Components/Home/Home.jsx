import React from 'react';

const Home = () => {
    return (
        <div>
            {/* banner section start */}
            <div className='md:flex justify-around mx-60 mt-20'>
                <div className='ml-2'>
                    <h1 className='text-6xl font-bold'>One Step
                        <br />
                        Closer To Your
                        <br />
                        <span className='text-blue-700'>Dream Job</span>
                    </h1>
                    <h3 className='mt-4 text-gray-500'>Explore thousands of job opportunities with all the
                        <br />
                        information you need. Its your future. Come find it. Manage all
                        <br />
                        your job application from start to finish.</h3>
                    <button className='mt-4 header-btn px-4'>Get Started</button>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                </div>
            </div>
            {/* banner section end */}
        </div>
    );
};

export default Home;