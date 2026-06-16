// Задание 2: Какой принцип нарушен? Почему?
class Bird {
  fly() {
    console.log("Flying");
  }

  swim() {
    console.log("Swimming");
  }
}

class Penguin extends Bird {
  swim() {
    console.log("Penguin swims");
  }
}

const penguin = new Penguin();
penguin.fly(); // Flying
penguin.swim(); // Penguin swims


/** Нарушен Liskov substitution — принцип подстановки Барбары Лисков из SOLID.
 * Принцип LSP: объекты дочернего класса должны быть заменяемы объектами родительского класса без нарушения работы программы.
 * Подкласс Penguin не может полностью заменить родительский класс Bird, потому что пингвин не умеет летать, но наследует метод fly().*/
