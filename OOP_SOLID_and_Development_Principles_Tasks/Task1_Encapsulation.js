/** Задание 1: Создайте класс Person, который будет иметь свойства name и age, а также метод introduce() для вывода в консоль представления человека.
 * Реализуйте инкапсуляцию, чтобы класс предоставлял доступ только через метод introduce() без прямого раскрытия деталей своей внутренней структуры. */
class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  introduce() {
    console.log(`Меня зовут ${this.#name}, мне ${this.#age}.`);
  }
}

const person = new Person('Алексей', 28);
person.introduce();

const person2 = new Person('Мария', 25);
person2.introduce();