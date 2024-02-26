import React, { useState } from 'react';

const Teachers = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  ]);
  const [newTeacherName, setNewTeacherName] = useState('');
  const [newTeacherEmail, setNewTeacherEmail] = useState('');
  const [editingTeacherId, setEditingTeacherId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddTeacher = () => {
    if (teachers.some((teacher) => teacher.email === newTeacherEmail)) {
      setErrorMessage('The email already exists.');
      return;
    }
    const newTeacher = {
      id: teachers.length + 1,
      name: newTeacherName,
      email: newTeacherEmail,
    };
    setTeachers([...teachers, newTeacher]);
    setNewTeacherName('');
    setNewTeacherEmail('');
    setErrorMessage('');
  };

  const handleDeleteTeacher = (id) => {
    const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);
    setTeachers(updatedTeachers);
  };

  const handleUpdateTeacher = (updatedTeacher) => {
    if (teachers.some((teacher) => teacher.id !== updatedTeacher.id && (teacher.name === updatedTeacher.name || teacher.email === updatedTeacher.email))) {
      setErrorMessage('Teacher with the same name or email already exists.');
      return;
    }
    const updatedTeachers = teachers.map((teacher) =>
      teacher.id === updatedTeacher.id ? updatedTeacher : teacher
    );
    setTeachers(updatedTeachers);
    setEditingTeacherId(null);
    setIsEditing(false);
    setErrorMessage('');
  };

  const handleEditTeacher = (id) => {
    const teacherToEdit = teachers.find((teacher) => teacher.id === id);
    setNewTeacherName(teacherToEdit.name);
    setNewTeacherEmail(teacherToEdit.email);
    setEditingTeacherId(id);
    setIsEditing(true);
  };

  return (
    <div>
      <h1>Teachers</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <div>
        <label>
          Teacher Name:
          <input
            type="text"
            value={newTeacherName}
            onChange={(e) => setNewTeacherName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Teacher Email:
          <input
            type="email"
            value={newTeacherEmail}
            onChange={(e) => setNewTeacherEmail(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleAddTeacher}>Add Teacher</button>
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
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{editingTeacherId === teacher.id ? newTeacherName : teacher.name}</td>
              <td>{editingTeacherId === teacher.id ? newTeacherEmail : teacher.email}</td>
              <td>
                <button onClick={() => handleEditTeacher(teacher.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDeleteTeacher(teacher.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditing && (
        <button onClick={() => handleUpdateTeacher({ id: editingTeacherId, name: newTeacherName, email: newTeacherEmail })}>
          Save
        </button>
      )}
    </div>
  );
}

export default Teachers;