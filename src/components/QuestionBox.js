import React from 'react';

const QuestionBox = ({ question, options, onSelect, highlightedColor }) => {
  return (
    <div className="question-box">
      <h3 style={{ color: highlightedColor }}>{question.text}</h3>
      <ul>
        {options.map((option) => (
          <li key={option.id} onClick={() => onSelect(option)}>
            {option.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionBox;