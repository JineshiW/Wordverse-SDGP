// src/pages/Dashboard.js
import React from 'react';

function Dashboard() {
  const usersCount = 100;
  const coursesCount = 20;
  const languagesCount = 15;
  const quizzesCount = 30;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Number of Users: {usersCount}</p>
      <p>Number of Courses: {coursesCount}</p>
      <p>Number of Languages: {languagesCount}</p>
      <p>Number of Quizzes: {quizzesCount}</p>
      {/* Add more dashboard-related content here */}
    </div>
  );
}

export default Dashboard;