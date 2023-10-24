Filename: complexCode.js

/**
 * This code demonstrates a complex implementation of a bank account management system.
 * It includes features like creating and managing accounts, performing transactions, and generating reports.
 */

class BankAccount {
  constructor(accountNumber, accountHolder, initialBalance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
    this.transactions = [];
  }

  deposit(amount) {
    const transaction = new Transaction(amount, 'Deposit');
    this.transactions.push(transaction);
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      const transaction = new Transaction(amount, 'Withdrawal');
      this.transactions.push(transaction);
      this.balance -= amount;
    } else {
      console.log('Insufficient balance');
    }
  }

  getStatement() {
    console.log('Account Statement:');
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Account Holder: ${this.accountHolder}`);
    console.log(`Balance: $${this.balance}`);
    console.log('Recent Transactions:');
    this.transactions.forEach(transaction => {
      console.log(`- ${transaction.type}: $${transaction.amount}`);
    });
  }
}

class Transaction {
  constructor(amount, type) {
    this.amount = amount;
    this.type = type;
    this.date = new Date();
  }
}

// Usage Example:

const account1 = new BankAccount('BA123456', 'John Doe', 1000);
account1.deposit(500);
account1.withdraw(200);
account1.deposit(1000);
account1.getStatement();

const account2 = new BankAccount('BA987654', 'Jane Smith', 5000);
account2.deposit(2000);
account2.withdraw(500);
account2.deposit(1500);
account2.withdraw(1000);
account2.getStatement();