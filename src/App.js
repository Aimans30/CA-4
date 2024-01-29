import React, { useState } from 'react';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';
import './App.css';
import questions from './questions';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [highlightedColor, setHighlightedColor] = useState(null); 

  const handleOptionSelect = (selectedOption) => {
    console.log(`Selected option: ${selectedOption.text}`);

    if (selectedOption.isCorrect) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setHighlightedColor(null); 
  };

  const handleHighlightQuestion = () => {
    const newColor = highlightedColor === null ? '#FFD700' : null; 
    setHighlightedColor(newColor);
  };

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Updated Navbar */}
      <div className="navbar">
        <div className="navbar-left">
          {/* Updated "Highlight Question" button */}
          <button
            onClick={handleHighlightQuestion}
            className={`button highlight-button`}
          >
            Highlight Question
          </button>
        </div>
        <div className="navbar-middle">
          <h1>React Quiz</h1>
        </div>
        <div className="navbar-right">
          {/* Updated "Toggle Dark Mode" button */}
          <button
            onClick={handleToggleDarkMode}
            className={`button dark-mode-button`}
          >
            Toggle Dark Mode
          </button>
        </div>
      </div>

      {/* Conditional rendering based on whether there are more questions or not */}
      {currentQuestion < questions.length ? (
        
        <QuestionBox
          question={questions[currentQuestion]}
          options={questions[currentQuestion].options}
          onSelect={handleOptionSelect}
          highlightedColor={highlightedColor}
        />
      ) : (
        
        <div>
          <Result score={score} totalQuestions={questions.length} />
          <button onClick={handleRestart}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
}

export default App;
