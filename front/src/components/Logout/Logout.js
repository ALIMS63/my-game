import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Logout() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    (async () => {
      await fetch('http://localhost:3001/api/logout');
      dispatch({
        type: 'LOGOUT'
      });
      history.push('/');
    })();
  });
  return <>Logout...</>
}

export default Logout;
