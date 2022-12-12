import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchAllProducts } from './redux/slices/productSlice';

import Header from './components/header';
import Home from './pages/home/Home';
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
    ],
  },
]);

const App = () => {
  const dispach = useDispatch();

  React.useEffect(() => {
    dispach(fetchAllProducts());
  });

  return (
    <div className="wrapper">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
