import React, { useState } from 'react';

const Auth = ({ setView, setIsAuthenticated }) => {
  const [view, setAuthView] = useState('auth');
  const [email, setEmail] = useState('janet.weaver@reqres.in'); // Example email
  const [password, setPassword] = useState('cityslicka'); // Example password

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      if (data.token) {
        setIsAuthenticated(true);
        setView('home');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

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
        setIsAuthenticated(true);
        setView('home');
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      {view === 'auth' && (
        <>
          <h2>Authentication</h2>
          <button onClick={() => setAuthView('login')} className="btn btn-primary">Login</button>
          <button onClick={() => setAuthView('register')} className="btn btn-secondary">Register</button>
        </>
      )}
      {view === 'login' && (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <button onClick={() => setAuthView('auth')} className="btn btn-link">Back</button>
        </form>
      )}
      {view === 'register' && (
        <form onSubmit={handleRegister}>
          <h2>Register</h2>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
          <button onClick={() => setAuthView('auth')} className="btn btn-link">Back</button>
        </form>
      )}
    </div>
  );
};

export default Auth;