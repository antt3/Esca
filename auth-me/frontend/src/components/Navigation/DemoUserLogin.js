import React from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const DemoUserLogin = () => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  if (sessionUser) return <Redirect to="/" />;

  const demoLogin = (e) => {
    e.preventDefault();
    return dispatch(
        sessionActions.login({ credential: 'Demo-lition', password: 'password' })
    )
};

  return (
    <>
      <button onClick={demoLogin}>Demo Login</button>
    </>
    );
};

export default DemoUserLogin;