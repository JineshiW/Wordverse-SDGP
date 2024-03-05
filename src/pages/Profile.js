// src/pages/Profile.js
import React, { useState } from 'react';


const Profile = () => {
  const [fullName, setFullName] = useState('Maneth Raj');
  const [email, setEmail] = useState('Maneth.raj@gmail.com');
  const [bio, setBio] = useState('Hi I am 41 currently perusuing a career in Software Engineering. My hobby is learning different languages in my free time. 😁');
  const [isEditMode, setIsEditMode] = useState(false);

  const handleSave = () => {
    console.log('User information saved');
    setIsEditMode(false);
  };

  const handleEdit = () => {
    console.log('Edit user information');
    setIsEditMode(true);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  return (
    <div className="profile-container">
      <div className="profile-details-container">
        <div className="profile-details">
          <div><h1>Profile Page</h1></div>
          <div className="label">User Name</div>
          <input
            className="input-field"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            readOnly={!isEditMode}
          />
        </div>
        <div className="profile-details">
          <div className="label">Email</div>
          <input
            className="input-field"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            readOnly={!isEditMode}
          />
        </div>
        <div className="profile-details">
          <div className="label">Bio</div>
          {isEditMode ? (
            <textarea
              className="input-field"
              value={bio}
              onChange={handleBioChange}
              readOnly={!isEditMode}
            />
          ) : (
            <input
              className="input-field"
              type="text"
              value={bio}
              onChange={handleBioChange}
              readOnly={!isEditMode}
            />
          )}
        </div>
        {isEditMode ? (
          <button className="save-btn" onClick={handleSave}>
            Save Profile
          </button>
        ) : (
          <button className="edit-btn" onClick={handleEdit}>
            Edit Profile
          </button>
        )}
      </div>
      <div className="profile-preview-container">
        <div className="profile-preview">
          <div className="profile-name">{fullName}</div>
          <div className="profile-email">{email}</div>
          <div className="profile-bio">{bio}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;