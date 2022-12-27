import React from 'react'
import { redirect, Route } from 'react-router-dom'

function PrivateRoute(props: any) {
    const token = localStorage.getItem('auth');
  return (
    <>
        {token ? <Route {...props} /> : redirect('/')}
    </>
  );
}

export default PrivateRoute