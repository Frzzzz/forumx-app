import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Navigation({ signOut }) {
  const { authUser = null } = useSelector((states) => states);

  if (authUser === null) {
    return (
      <nav>
        <span>ForumX</span>
        <ul>
          <li><Link to="/">Threads</Link></li>
          <li><Link to="/leaderboards">Leaderboards</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    );
  }
  return (
    <nav>
      <span>ForumX</span>
      <ul>
        <li><Link to="/">Threads</Link></li>
        <li><Link to="/leaderboards">Leaderboards</Link></li>
        <li><button type="button" onClick={signOut} className="signOut">Sign out</button></li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
