// Напишите функцию, которая принимает массив и значение, и возвращает true, если это значение присутствует в массиве, и false, если нет. 
// Используйте строгий режим.

'use strict'

function Task1(arr, value){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === value){
            return true
        }
    }
    return false
}

console.log(Task1([1, 2, 3, 4, 5], 3)) // true
console.log(Task1([1, 2, 3, 4, 5], 6)) // false
