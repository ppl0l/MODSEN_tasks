// Напишите функцию, которая принимает массив с числами и находит сумму первой половины элементов этого массива.

function Task4(arr) {
  const mid = Math.ceil(arr.length / 2)
  
  let sum = 0
  for (let i = 0; i < mid; i++) {
    sum += arr[i]
  }
  
  return sum
}

console.log(Task4([1, 2, 3, 4, 5, 6])) // 6
console.log(Task4([1, 2, 3, 4, 5])) // 6
console.log(Task4([10, 20, 30, 40])) // 30
