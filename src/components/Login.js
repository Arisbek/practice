import React, { useState } from 'react';

const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      if (data.token) {
        setView('home');
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error(error);
    }
  };
export default Login;