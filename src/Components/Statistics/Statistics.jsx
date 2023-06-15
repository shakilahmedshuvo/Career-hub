import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts';

// marks array for Statistics
const marksArray = [
    {
        number: 'Assignment 1',
        marks: '55'
    },
    {
        number: 'Assignment 2',
        marks: '52'
    },
    {
        number: 'Assignment 3',
        marks: '57'
    },
    {
        number: 'Assignment 4',
        marks: '48'
    },
    {
        number: 'Assignment 5',
        marks: '58'
    },
    {
        number: 'Assignment 6',
        marks: '53'
    },
    {
        number: 'Assignment 7',
        marks: '60'
    },
    {
        number: 'Assignment 8',
        marks: '58'
    },
]

const Statistics = () => {
    return (
        <div>
            <h1
                className='mt-15 text-center font-bold  text-3xl'>
                My Assignment Marks Chart
            </h1>
            <div
                className='mt-10'
                style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={marksArray}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="number" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;