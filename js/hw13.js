/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */
const account = {
  balance: 0, // Поточний баланс рахунку
  transactions: [], // Історія транзакцій
  countId: 1,
  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    //{amaunt: amaunt, type: type, id: id}
    const newTransaction = {
      amount: amount,
      type: type,
      id: this.countId,
    };
    this.countId += 1;
    return newTransaction;
  },
  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    // метод який додає гроші
    this.balance += amount; // плюсує гроші д обалансу
    const transaction = this.createTransaction(amount, "Депозит"); // створюємо об'єкт транзакції
    this.transactions.push(transaction); // запушили до масиву об'єкт транзакції
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("недостатньо коштів на рахунку");
      return;
    }
    this.balance -= amount; // мінусує  гроші д обалансу
    const transaction = this.createTransaction(amount, "withdraw"); // створюємо об'єкт транзакції
    this.transactions.push(transaction); // запушили до масиву об'єкт транзакції
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      const transaction = this.transactions[i];
      if (transaction.id === id) {
        return transaction;
      }
    }
    return null;
  },

  /*

   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let total = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      const transaction = this.transactions[i];
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

account.deposit(1000);
console.log("ваш баланс після поповнення =", account.getBalance());
account.withdraw(500);
console.log("ваш баланс після зняття =", account.getBalance());
