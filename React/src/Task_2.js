// Создать компонент, которому передаем текст (3-4 предложения с точкой в конце каждого предложения). Компонент выводит только первое предложение.
// И есть кнопка "Показать подробнее" - при клике на неё выводиться вместо одного предложения весь текст. После этого, при нажатии на кнопку
// текст можно закрыть и должно отображаться одно предложение.

import React, { useState } from 'react';

const Task2 = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sentences = text.match(/[^.!?]+[.!?]/g) || [text];
  const firstSentence = sentences[0] || text;
  const fullText = sentences.join(' ');

  return (
    <div>
      <p> {isExpanded ? fullText : firstSentence} </p>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Закрыть" : "Показать подробнее"}
      </button>
    </div>
  );
};

export default Task2;
