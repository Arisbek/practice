import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    console.log('User logged out');
  };

  return (
    <div className="container">
      <h2>Logout</h2>
      <button onClick={handleLogout} className="btn btn-primary">Logout</button>
    </div>
  );
};

export default Logout;