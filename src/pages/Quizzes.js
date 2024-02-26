import React, { useState } from 'react';

const initialQuizzes = [
  { id: 1, name: 'Quiz 1', description: 'Quiz 1 description' },
  { id: 2, name: 'Quiz 2', description: 'Quiz 2 description' },
  { id: 3, name: 'Quiz 3', description: 'Quiz 3 description' },
];

function Quizzes() {
  const [quizzes, setQuizzes] = useState(initialQuizzes);
  const [newQuizName, setNewQuizName] = useState('');
  const [newQuizDescription, setNewQuizDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingQuizId, setEditingQuizId] = useState(null);

  const handleAddQuiz = () => {
    const newQuiz = {
      id: quizzes.length + 1,
      name: newQuizName,
      description: newQuizDescription,
    };
    setQuizzes([...quizzes, newQuiz]);
    setNewQuizName('');
    setNewQuizDescription('');
  };

  const handleEdit = (id) => {
    const quizToEdit = quizzes.find((quiz) => quiz.id === id);
    setNewQuizName(quizToEdit.name);
    setNewQuizDescription(quizToEdit.description);
    setIsEditing(true);
    setEditingQuizId(id);
  };

  const handleUpdateQuiz = (updatedQuiz) => {
    const updatedQuizzes = quizzes.map((quiz) =>
      quiz.id === updatedQuiz.id ? updatedQuiz : quiz
    );
    setQuizzes(updatedQuizzes);
    setIsEditing(false);
    setEditingQuizId(null);
  };

  const handleDelete = (id) => {
    const updatedQuizzes = quizzes.filter((quiz) => quiz.id !== id);
    setQuizzes(updatedQuizzes);
  };

  return (
    <div>
      <h1>Quizzes</h1>
      <div>
        <label>
          Quiz Name:
          <input
            type="text"
            value={newQuizName}
            onChange={(e) => setNewQuizName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Quiz Description:
          <textarea
            value={newQuizDescription}
            onChange={(e) => setNewQuizDescription(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleAddQuiz}>Add Quiz</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {quizzes.map((quiz) => (
            <tr key={quiz.id}>
              <td>{quiz.id}</td>
              <td>{quiz.name}</td>
              <td>{quiz.description}</td>
              <td>
                <button onClick={() => handleEdit(quiz.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(quiz.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditing && (
        <button onClick={() => handleUpdateQuiz({ id: editingQuizId, name: newQuizName, description: newQuizDescription })}>
          Save
        </button>
      )}
    </div>
  );
}

export default Quizzes;