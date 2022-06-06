import React from 'react';

import './SplashPage.css';

import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const SplashPage = () => {
  const sessionUser = useSelector(state => state.session.user);

  if (sessionUser) return <Redirect to="/" />;

  return (
    <div className='splashDiv'>
      <h1>Hi, Welcome to Esca!</h1>
      <div>
          <p className='splashtxt'>You can sign in, create a new account, or just log in as a demo user with the buttons above.</p>
      </div>
      <div className='splashtxt'>
          <p>Also check out my Github below.</p>
      </div>
    </div>
    );
};

export default SplashPage;

