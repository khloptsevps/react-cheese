import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Header from './components/header';
import Modal from './components/modal/Modal';
import CartPage from './pages/cart/CartPage';
import Home from './pages/home/Home';
import AboutPage from './pages/about/AboutPage';
import NotFound from './pages/notFound/NotFound';

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
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/delivery',
        element: <AboutPage />,
      },
    ],
  },
]);

const App = () => (
  <div className="wrapper">
    <RouterProvider router={router} />
    <Modal />
  </div>
);

export default App;
