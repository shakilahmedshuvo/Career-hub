import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Statistics from './Components/Statistics/Statistics';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import ShowDetailes from './Components/ShowDetailes/ShowDetailes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('jobData.json')
      },
      {
        path:"ShowDetails/:CardId",
        element:<ShowDetailes></ShowDetailes>,
        loader:()=>fetch('/cardInfoData.json')
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
