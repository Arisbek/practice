import React, { useState } from 'react';
import FetchUsers from './components/FetchUsers';
import FetchUserPosts from './components/FetchUser';
import FetchPosts from './components/FetchPosts';
import FetchError from './components/FetchError';
import PaginatedUsers from './components/PaginateUsers';
import SearchablePosts from './components/SearchablePosts';
import FetchUsersWithCache from './components/FetchUsersCache';
import DetailView from './components/DetailView';
import DebouncedSearchPosts from './components/DSP';
import ScrollPosts from './components/ScrollPosts';
import Auth from './components/Auth';
import './App.css';

function App() {
  const [view, setView] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setView('home');
  };

  return (
    <div className="App">
      <main>
        {view === 'home' && (
          <>
            {!isAuthenticated && (
              <button onClick={() => setView('auth')} className="btn btn-link">Auth</button>
            )}
            {isAuthenticated && (
              <button onClick={handleLogout} className="btn btn-link">Logout</button>
            )}
            <br />
            <h2>List of users:</h2>
            <FetchUsers />
            <br />
            <h2>Posts:</h2>
            <FetchPosts />
            <br />
            <h2>Fetching with invalid link</h2>
            <FetchError />
            <h2>Fetch a single user:</h2>
            <FetchUserPosts />
            <h2>Paginated list of users:</h2>
            <PaginatedUsers />
            <h2>Searchable list of posts:</h2>
            <SearchablePosts />
            <h2>Fetch users with caching:</h2>
            <FetchUsersWithCache />
            <h2>Master-Detail View:</h2>
            <DetailView />
            <h2>Debounced Search for Posts:</h2>
            <DebouncedSearchPosts />
            <h2>Infinite Scroll for Posts:</h2>
            <ScrollPosts />
          </>
        )}
        {view === 'auth' && <Auth setView={setView} setIsAuthenticated={setIsAuthenticated} />}
      </main>
    </div>
  );
}

export default App;