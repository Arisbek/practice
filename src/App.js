import React from 'react';
import FetchUsers from './FetchUsers';
import FetchPosts from './FetchPosts';
import FetchError from './FetchError';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <h2>List of users:</h2>
        <FetchUsers />
        <br />
        <h2>Posts:</h2>
        <FetchPosts />
        <br />
        <h2>Fetching with invalid link</h2>
        <FetchError />
      </main>
    </div>
  );
}

export default App;
