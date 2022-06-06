import React from 'react';

import './Navigation.css';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import PostFormModal from '../PostFormModal';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormPage';
import DemoUserLogin from './DemoUserLogin';

function Navigation({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);
  
    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <ProfileButton user={sessionUser} />
                <PostFormModal user={sessionUser} />
            </>
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <SignupFormModal />
                <DemoUserLogin />
            </>
        );
    }
  
    return (
        <div className='Nav'>
            <NavLink className="home" exact to="/">Home</NavLink>
            {isLoaded && sessionLinks}
        </div>
    );
}

export default Navigation;