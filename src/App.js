import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/admin/Dashboard';
import SignIn from './Components/SignIn';
import Body from './Components/Body';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import UserProfile from './Components/UserProfile';
import ProtectedRoute from './utils/ProtectedRoute';
import { Provider } from 'react-redux';
import store from './store/store';
import Cart from './Components/Cart';
import RestaurantMenu from './Components/RestaurantMenu';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'signin',
        element: <SignIn />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />
      },
      {
        path: 'my-profile',
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        )
      }
    ]
  },
  {
    path: 'admin',
    element: (
      <Provider store={store}>
        <ProtectedRoute user="restaurant">
          <Dashboard />
        </ProtectedRoute>
      </Provider>
    )
  }
]);

function App () {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}

export default appRouter;
