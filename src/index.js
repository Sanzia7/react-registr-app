import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
///import { BrowserRouter as Router, createHashRouter } from 'react-router-dom'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
    {
        path: '/*',
        element: <App />
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>

);


