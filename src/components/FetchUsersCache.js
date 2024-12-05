import useFetchWithCache from './useFetchWithCache';

function FetchUsersWithCache() {
  const { data: users, loading, error } = useFetchWithCache('https://jsonplaceholder.typicode.com/users');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  return (
    <ul>
      {users && users.map(user => (
        <li key={user.id}>
          <strong>{user.name}</strong> - {user.email}
        </li>
      ))}
    </ul>
  );
}

export default FetchUsersWithCache;