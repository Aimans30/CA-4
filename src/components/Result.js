// Result.js

import React from 'react';

const Result = ({ score, totalQuestions, isDarkMode }) => {
  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div className={`result-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2 style={{ fontSize: '1.5em' }}>Quiz Completed!</h2>
      <p style={{ fontSize: '1.2em' }}>Your Score: {score} out of {totalQuestions}</p>
      <p style={{ fontSize: '1.2em' }}>Percentage: {percentage}%</p>
    </div>
  );
};

export default Result;
