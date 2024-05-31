import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function Register({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="register-input">
      <input type="text" id="fullname" value={name} onChange={onNameChange} placeholder="Name" required />
      <input type="text" id="email" value={email} onChange={onEmailChange} placeholder="Email" required />
      <input type="password" id="password" value={password} onChange={onPasswordChange} placeholder="Password" required />
      <button type="button" onClick={() => register({ name, email, password })}>Register</button>
    </form>
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Register;
