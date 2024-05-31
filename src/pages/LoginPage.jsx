import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };

  return (
    <>
      <Header />
      <section className="login-page">
        <div className="login-form">
          <h2>Login</h2>
          <LoginForm login={onLogin} />
          <p>
            Don&apos;t have an account?
            {' '}
            <Link
              className="link-style"
              to="/register"
            >
              Create New
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
