import React from 'react';
import Register from './Register';

const RegisterConts = ({ authService }) => {
  return <Register authService={authService} btnType={'reg'}></Register>;
};

export default RegisterConts;
