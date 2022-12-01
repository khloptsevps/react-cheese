import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Header from './components/header';
import Home from './pages/home/Home';

const Layout = () => (
  <React.Fragment>
    <Header />
    <Outlet />
  </React.Fragment>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Станица не существует, пока что...</div>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

const App = () => (
  <div className="wrapper">
    <RouterProvider router={router} />
  </div>
);

export default App;
