import React, { useState } from 'react';

const initialUsers = [
  { id: 1, name: 'User 1', email: 'user1@example.com' },
  { id: 2, name: 'User 2', email: 'user2@example.com' },
  { id: 3, name: 'User 3', email: 'user3@example.com' },
];

function Users() {
  const [users, setUsers] = useState(initialUsers);
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [editingUserId, setEditingUserId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddUser = () => {
    if (users.some((user) => user.name === newUserName || user.email === newUserEmail)) {
      setErrorMessage('User with the same name or email already exists.');
      return;
    }
    const newUser = {
      id: users.length + 1,
      name: newUserName,
      email: newUserEmail,
    };
    setUsers([...users, newUser]);
    setNewUserName('');
    setNewUserEmail('');
    setErrorMessage('');
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleUpdateUser = (updatedUser) => {
    if (users.some((user) => user.id !== updatedUser.id && (user.name === updatedUser.name || user.email === updatedUser.email))) {
      setErrorMessage('User with the same name or email already exists.');
      return;
    }
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setEditingUserId(null);
    setErrorMessage('');
  };

  const handleEditUser = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setNewUserName(userToEdit.name);
    setNewUserEmail(userToEdit.email);
    setEditingUserId(id);
  };

  return (
    <div>
      <h1>Users</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <div>
        <label>
          User Name:
          <input
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
        </label>
        <br />
        <label>
          User Email:
          <input
            type="email"
            value={newUserEmail}
            onChange={(e) => setNewUserEmail(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{editingUserId === user.id ? newUserName : user.name}</td>
              <td>{editingUserId === user.id ? newUserEmail : user.email}</td>
              <td>
                <button onClick={() => handleEditUser(user.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingUserId && (
        <button onClick={() => handleUpdateUser({ id: editingUserId, name: newUserName, email: newUserEmail })}>
          Save
        </button>
      )}
    </div>
  );
}

export default Users;