import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErorPage from './Pages/ErorPage';
import Main from './Components/Main';
import Git from './Pages/Git';
import Motion from './Pages/Motion';
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErorPage/>,
    children:[
      {
        path:"/",
        element:<Main/>
      },
      {
        path:"/git",
        element:<Git/>
      },
      {
        path:"/motion",
        element:<Motion/>
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
