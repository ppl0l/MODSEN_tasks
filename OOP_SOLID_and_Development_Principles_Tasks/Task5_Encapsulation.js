// Задание 5: Какой принцип реализован? Почему?
class Account {
  constructor(balance) {
    this.balance = balance;
  }
  
  deposit(amount) {
    this.balance += amount;
  }
  
  withdraw(amount) {
    this.balance -= amount;
  }
  
  getBalance() {
    return this.balance;
  }
}

const account = new Account(100);
account.deposit(50);
console.log(account.getBalance());

/** Реализован принцип инкапсуляции ООП.
 * Класс Account скрывает своё внутреннее состояние (balance) и предоставляет доступ к нему только через методы (deposit(), withdraw(), getBalance()). 
 * Это защищает данные от некорректного изменения и обеспечивает контролируемый доступ. */