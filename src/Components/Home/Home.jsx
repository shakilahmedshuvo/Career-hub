import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowData from '../ShowData/ShowData';
import CardDisplay from '../CardDisplay/CardDisplay';

const Home = () => {
    const loadData = useLoaderData();
    const [cardData, setCardData] = useState([])
    useEffect(()=>{
        fetch('cardInfoData.json')
        .then(res=>res.json())
        .then(data=>setCardData(data))
    },[])
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
            {/* job section start */}
            <div className='text-center mt-20'>
                <h1 className='text-3xl font-bold'>Job Category List</h1>
                <p className='mt-4  text-gray-500 font-medium'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='mt-14 grid md:grid-cols-4 mx-20'>
                    {
                        loadData.map(data => <ShowData
                            data={data}
                            key={data.id}
                        ></ShowData>)
                    }
                </div>
            </div>
            {/* job section end */}
            {/* feature job section start */}
            <div className='text-center mt-10'>
                <h1 className='font-bold text-4xl'>Featured Jobs</h1>
                <p className='mt-4 text-gray-400'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid md:grid-cols-2 gap-12 mt-16 md:mx-44 mb- 8'>
                {
                        cardData.map(cards=><CardDisplay
                        cards={cards}
                        key={cards.id}
                        ></CardDisplay>)
                }
            </div>
            {/* feature job section end */}
        </div>
    );
};

export default Home;