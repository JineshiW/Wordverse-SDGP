import React, { useState } from 'react';

const initialLanguages = [
  { id: 1, name: 'English', code: 'en' },
  { id: 2, name: 'Spanish', code: 'es' },
  { id: 3, name: 'French', code: 'fr' },
];

function Languages() {
  const [languages, setLanguages] = useState(initialLanguages);
  const [newLanguageName, setNewLanguageName] = useState('');
  const [newLanguageCode, setNewLanguageCode] = useState('');
  const [editingLanguageId, setEditingLanguageId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddLanguage = () => {
    const newLanguage = {
      id: languages.length + 1,
      name: newLanguageName,
      code: newLanguageCode,
    };
    setLanguages([...languages, newLanguage]);
    setNewLanguageName('');
    setNewLanguageCode('');
  };

  const handleEditLanguage = (id) => {
    const selectedLanguage = languages.find((language) => language.id === id);
    setNewLanguageName(selectedLanguage.name);
    setNewLanguageCode(selectedLanguage.code);
    setEditingLanguageId(id);
    setIsEditing(true);
  };

  const handleUpdateLanguage = (updatedLanguage) => {
    const updatedLanguages = languages.map((language) =>
      language.id === updatedLanguage.id ? updatedLanguage : language
    );
    setLanguages(updatedLanguages);
    setEditingLanguageId(null);
    setIsEditing(false);
  };

  const handleDeleteLanguage = (id) => {
    const updatedLanguages = languages.filter(
      (language) => language.id !== id
    );
    setLanguages(updatedLanguages);
  };

  return (
    <div>
      <h1>Languages</h1>
      <div>
        <label>
          Language Name:
          <input
            type="text"
            value={newLanguageName}
            onChange={(e) => setNewLanguageName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Language Code:
          <input
            type="text"
            value={newLanguageCode}
            onChange={(e) => setNewLanguageCode(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleAddLanguage}>Add Language</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Code</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {languages.map((language) => (
            <tr key={language.id}>
              <td>{language.id}</td>
              <td>{editingLanguageId === language.id ? newLanguageName : language.name}</td>
              <td>{editingLanguageId === language.id ? newLanguageCode : language.code}</td>
              <td>
                <button onClick={() => handleEditLanguage(language.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDeleteLanguage(language.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditing && (
        <button onClick={() => handleUpdateLanguage({ id: editingLanguageId, name: newLanguageName, code: newLanguageCode })}>
          Save
        </button>
      )}
    </div>
  );
}

export default Languages;