// Реализовать форму с помощью функциональных компонентов, в форме должно быть реализовано одно поле и значение этого поля нужно выводить в консоль 
// после нажатия на кнопку, которая находится тоже в форме. Нужно использовать хук useRef для того, чтобы вывести значение, которое введено в input.

import React, { useRef } from 'react';

const Task1 = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Значение поля:", inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userInput">Введите текст:</label>
      <input ref={inputRef} type="text" id="userInput" />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Task1;
