import React from 'react';
import Register from '../registerForm/RegisterForm';

const RegisterConts = ({ authService }) => {
  return <Register authService={authService} btnType={'reg'}></Register>;
};

export default RegisterConts;
