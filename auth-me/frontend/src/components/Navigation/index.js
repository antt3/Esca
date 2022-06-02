import React from 'react';

import './Navigation.css';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import PostFormModal from './PostFormModal';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormPage';

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
            </>
        );
    }
  
    return (
        <ul>
            <li>
                <NavLink exact to="/">Home</NavLink>
                {isLoaded && sessionLinks}
            </li>
        </ul>
    );
}

export default Navigation;