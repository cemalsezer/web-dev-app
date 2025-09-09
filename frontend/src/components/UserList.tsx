import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';
import { User } from '../types/user';

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [editedUser, setEditedUser] = useState<Partial<User>>({});



  const [newUser, setNewUser] = useState({
    name: '',
    username: '',
    email: '',
  });

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

   const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    const id = users.length + 1; 
    const user: User = { id, ...newUser };
    setUsers([...users, user]);
    setNewUser({ name: '', username: '', email: '' }); 
  };

  const handleDeleteUser = (id: number) => {
  const updatedUsers = users.filter(user => user.id !== id);
  setUsers(updatedUsers);
};

const startEditing = (user: User) => {
  setEditingUserId(user.id);
  setEditedUser({
    name: user.name,
    username: user.username,
    email: user.email,
  });
};

const handleUpdateUser = (id: number) => {
  const updated = users.map(user =>
    user.id === id ? { ...user, ...editedUser } : user
  );
  setUsers(updated);
  setEditingUserId(null);
  setEditedUser({});
};

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Users</h2>
      
       <form onSubmit={handleAddUser} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          required
        />
        <button type="submit">Add User</button>
      </form>

      <ul>
       {users.map(user => (
  <li key={user.id} style={{ marginBottom: '10px' }}>
    {editingUserId === user.id ? (
      <div>
        <input
          type="text"
          value={editedUser.name || ''}
          onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
        />
        <input
          type="text"
          value={editedUser.username || ''}
          onChange={(e) => setEditedUser({ ...editedUser, username: e.target.value })}
        />
        <input
          type="email"
          value={editedUser.email || ''}
          onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
        />
        <button onClick={() => handleUpdateUser(user.id)}>Kaydet</button>
        <button onClick={() => setEditingUserId(null)}>İptal</button>
      </div>
    ) : (
      <div>
        <strong>{user.name}</strong> ({user.username}) - {user.email}
        <button onClick={() => startEditing(user)} style={{ marginLeft: '10px' }}>
          Düzenle
        </button>
        <button onClick={() => handleDeleteUser(user.id)} style={{ marginLeft: '5px', color: 'red' }}>
          Sil
        </button>
      </div>
    )}
  </li>
))}
      </ul>
    </div>
  );
};

export default UserList;