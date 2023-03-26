/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggedIn } from '../store/authSlice';
const ProtectedRoute = (props) => {
  const isLoggedIn = useSelector((store) => store.auth.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkUserToken = () => {
    const userToken = localStorage.getItem('token');
    if (!userToken || userToken === 'undefined') {
      dispatch(setLoggedIn(false));
      return navigate('/signin');
    }
    if (props?.user === 'restaurant') {
      // TODO: API call to check if user is Restaurant Owner or not
    }

    dispatch(setLoggedIn(true));
  };
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);
  return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
};

export default ProtectedRoute;
