import React from 'react';

const Blog = () => {
    return (
        <div className='mt-20 p-2'>
            <h1 className='font-bold text-2xl'>1.When should you use context API?</h1>
            <p>Answer:Context API is a way to manage global state in a React application and share data between components without passing it down through props.</p>
            <h1 className='font-bold text-2xl mt-5'>2.What is a custom hook?</h1>
            <p>Answer:Custom hook in React is a reusable function that encapsulates logic and state related to a specific concern or feature, which can be shared among multiple components in a React application. </p>
            <h1 className='font-bold text-2xl mt-5'>3.What is useRef?</h1>
            <p>Answer:UseRef is a built-in hook in React that provides a way to create and access mutable references to elements or values in a functional component.</p>
            <h1 className='font-bold text-2xl mt-5'>4.What is useMemo?</h1>
            <p>Answer:UseMemo is a built-in hook in React that is used to optimize performance by memoizing the result of a computation or calculation, and only recomputing the result if the dependencies change.</p>
        </div>
    );
};

export default Blog;