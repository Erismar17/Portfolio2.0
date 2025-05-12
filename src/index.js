import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
/* 
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Navigation from './Components/Navbar/Navbar';
import NotFound from "./Components/Error-Path/404";
import Skills from "./Components/Skills/Skills";
import reportWebVitals from './reportWebVitals';
import Work from "./Components/Work/Work";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import CV from "./Components/CV/CV";
import './index.css';
import React from "react";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Navigate to='overview' replace/>,
      },
      {
        path:"work",
        element: <Work />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "cv",
        element: <CV />,
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
 */