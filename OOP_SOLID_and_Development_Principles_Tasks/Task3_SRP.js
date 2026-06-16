// Задание 3: Какой принцип нарушен? Почему?
class User {
  constructor(name) {
    this.name = name;
  }
  
  saveToDatabase() {
    console.log(`Saving ${this.name} to database`);
  }
  
  sendEmail() {
    console.log(`Sending email to ${this.name}`);
  }
}

const user = new User("Alice");
user.saveToDatabase();
user.sendEmail();

/** Нарушен Single Responsibility Principle — принцип единственной ответственности из SOLID.
 * Принцип SRP: у класса должна быть только одна причина для изменения. Класс должен выполнять только одну функцию (иметь одну зону ответственности).
 * Класс User отвечает за хранение данных, работу с БД и отправку email — три разные ответственности в одном классе. */