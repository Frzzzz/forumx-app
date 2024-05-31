import React from 'react';
import { useDispatch } from 'react-redux';
import Navigation from './Navigation';
import { asyncUnsetAuthUser } from '../states/authUser/action';

function Header() {
  const dispatch = useDispatch();
  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };
  return (
    <header>
      <Navigation signOut={onSignOut} />
    </header>
  );
}

export default Header;
