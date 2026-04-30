// Student: Shpetim Halidi | ID: 132829.
import { useState, useEffect, useMemo } from 'react';
import UserCard from './components/UserCard';
import RegisterUser from './components/RegisterUser';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          if (!res.ok) throw new Error("Request failed");
          return res.json();
        })
        .then(data => {
          const updatedData = data.map(u => ({ ...u, rating: 5, verified: false }));
          setUsers(updatedData);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
  }, []);

  const averageRating = useMemo(() => {
    if (users.length === 0) return 0;
    const total = users.reduce((acc, user) => acc + user.rating, 0);
    return (total / users.length).toFixed(2);
  }, [users]);

  const addUser = (newUser) => setUsers([...users, newUser]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
      <div>
        <h1>User Directory</h1>
        <h3>Average Rating: {averageRating}</h3>
        <RegisterUser addUser={addUser} />
        <hr />
        {users.map(u => <UserCard key={u.id} user={u} />)}
      </div>
  );
}

export default App;