// Напишите функцию для применения алгоритма сортировки пузырьком.

function Task5(arr) {
  const sorted = [...arr]
  const n = sorted.length
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (sorted[j] > sorted[j + 1]) {
        const temp = sorted[j]
        sorted[j] = sorted[j + 1]
        sorted[j + 1] = temp
      }
    }
  }
  
  return sorted
}

console.log(Task5([5, 3, 8, 1, 2, 7])) // [1, 2, 3, 5, 7, 8]
console.log(Task5([1, 2, 3, 4, 5])) // [1, 2, 3, 4, 5]
console.log(Task5([5, 4, 3, 2, 1])) // [1, 2, 3, 4, 5]
