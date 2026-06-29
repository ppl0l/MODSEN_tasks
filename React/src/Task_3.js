// Необходимо реализовать функциональный компонент InputNumber, в котором нужно ввести число в input и в зависимости отрицательное или 
// положительное это число в компоненте Message нужно выводить информацию: "Число больше нуля" / "Число меньше нуля".

import React, { useState } from 'react';

const InputNumber = () => {
  const [value, setValue] = useState('');
  const number = Number(value);

  return (
    <div>
      <input 
        type="number" 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите число"
      />
      
      {value !== '' && (
        <p> {number > 0 ? "Число больше нуля" : number < 0 ? "Число меньше нуля" : "Число равно нулю"} </p>
      )}
    </div>
  );
};

export default InputNumber;