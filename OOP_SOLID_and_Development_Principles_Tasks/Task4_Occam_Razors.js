/** Задание 4: создайте класс Book, который будет содержать свойства title и author, 
 * а также метод getDetails() для вывода в консоль информации о книге.
 * Примените принцип Бритвы Оккама, оставив только те свойства и методы, которые необходимы для выполнения задачи. */

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getDetails() {
    console.log(`Книга: "${this.title}", Автор: ${this.author}`);
  }
}

const book1 = new Book("Война и мир", "Лев Толстой");
const book2 = new Book("Преступление и наказание", "Фёдор Достоевский");

book1.getDetails();
book2.getDetails();