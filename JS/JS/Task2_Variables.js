// Попробуйте объявить переменную с тем же именем дважды, используя var, let, const. Какие переменные позволяют повторное объявление, а какие нет?

var name = 'Polina';
var name = 'Maria';
console.log(name); // Maria

let age = 10;
let age = 20;
console.log(age); // Identifier 'age' has already been declared

const city = 'Minsk';
const city = 'Moscow';
console.log(age); // Identifier 'city' has already been declared


let x = 'moscow';
if (true){
    let x = 'minsk';
    console.log(x); // minsk
}
console.log(x); // moscow


var a = 1;
let a = 2;
console.log(a); //  Identifier 'a' has already been declared

// Повторное объявление разрешено только с var. С let и const строго запрещено в рамках одной области видимости
