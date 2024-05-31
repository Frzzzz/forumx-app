import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';
import RegisterForm from '../components/RegisterForm';
import Header from '../components/Header';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/login');
  };

  return (
    <>
      <Header />
      <section className="register-page">
        <div className="register-form">
          <article className="register-form__main">
            <h2>Register</h2>
            <RegisterForm register={onRegister} />
            <p>
              Already have an account?
              {' '}
              <Link
                className="link-style"
                to="/login"
              >
                Login
              </Link>
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default RegisterPage;
