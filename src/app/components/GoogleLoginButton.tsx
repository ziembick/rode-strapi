'use client';

import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = ({ onSuccess }: { onSuccess: (token: any) => void }) => {
  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        const token = credentialResponse.credential;
        onSuccess(token);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
};

export default GoogleLoginButton;
