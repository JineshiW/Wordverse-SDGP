import React, { useState } from 'react';

const Courses = () => {
  const [courses, setCourses] = useState([
    { id: '1', name: 'React', moduleInfo: 'React module information' },
    { id: '2', name: 'Node.js', moduleInfo: 'Node.js module information' },
  ]);

  const [newCourseId, setNewCourseId] = useState('');
  const [newCourseName, setNewCourseName] = useState('');
  const [newModuleInfo, setNewModuleInfo] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingCourseId, setEditingCourseId] = useState('');

  const handleAddCourse = () => {
    const newCourse = { id: newCourseId, name: newCourseName, moduleInfo: newModuleInfo };
    setCourses([...courses, newCourse]);
    setNewCourseId('');
    setNewCourseName('');
    setNewModuleInfo('');
  };

  const handleEdit = (id) => {
    const courseToEdit = courses.find((course) => course.id === id);
    setIsEditing(true);
    setEditingCourseId(id);
    setNewCourseId(courseToEdit.id);
    setNewCourseName(courseToEdit.name);
    setNewModuleInfo(courseToEdit.moduleInfo);
  };

  const handleUpdateCourse = (updatedCourse) => {
    const updatedCourses = courses.map((course) => (course.id === updatedCourse.id ? updatedCourse : course));
    setCourses(updatedCourses);
    setIsEditing(false);
    setEditingCourseId('');
  };

  const handleDelete = (id) => {
    const filteredCourses = courses.filter((course) => course.id !== id);
    setCourses(filteredCourses);
  };

  return (
    <div>
      <h1>Courses</h1>
      <div>
        <label>
          Course ID:
          <input
            type="text"
            value={newCourseId}
            onChange={(e) => setNewCourseId(e.target.value)}
          />
        </label>
        <br />
        <label>
          Course Name:
          <input
            type="text"
            value={newCourseName}
            onChange={(e) => setNewCourseName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Module Information:
          <textarea
            value={newModuleInfo}
            onChange={(e) => setNewModuleInfo(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleAddCourse}>Add Course</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Module Information</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.moduleInfo}</td>
              <td>
                <button onClick={() => handleEdit(course.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(course.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditing && (
        <button onClick={() => handleUpdateCourse({ id: editingCourseId, name: newCourseName, moduleInfo: newModuleInfo })}>
          Save
        </button>
      )}
    </div>
  );
};

export default Courses;