import React from 'react';
import Task1 from './Task_1';
import Task2 from './Task_2';
import Task3 from './Task_3';

function App() {
  return (
    <>
      <h2>Задание 1</h2>
      <Task1 />
      
      <h2>Задание 2</h2>
      <Task2 text="Привет, мир. Мир, привет. Сегодня хороший день." />
      
      <h2>Задание 3</h2>
      <Task3 />
    </>
  );
}

export default App;