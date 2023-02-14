import React from 'react'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
    RouterProvider,
  useLocation,
  Outlet
} from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Project from './components/Project/Project'
import Home from './components/home/Home'
import AllProject from './components/allProject/allProject'
import Test from './components/test/test'
import ErrorPage from './components/Error/Error';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
        {
        path: "/",
            element: <Home />,
        errorElement: <ErrorPage />,
        },
        {
            path: "/project/:id",
            element: <Project />,
        },
        {
            element: <AllProject />,
            path: "/allProject",
      },
      {
        element: <Test />,
        path: "/test",
      }
    ]
  }
]);


const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<RouterProvider router={router} />);
}

