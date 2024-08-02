Designing an ATM System
Requirements
The ATM system should support basic operations such as balance inquiry(talab, so'roq), cash(naqd pul) withdrawal(bank hisobidan olingan pull summasi), and cash deposit(pul qo'yish).
Users should be able(imkoniyatga ega bo'lmoq) to authenticate themselves(o'zlari) using a card and a PIN (Personal Identification Number).
The system should interact(o'zaro ta'sir qilmoq) with a bank's backend system to validate user accounts and perform transactions.
The ATM should have a cash dispenser to dispense cash to users.
The system should handle concurrent access and ensure data consistency.
The ATM should have a user-friendly(tushunish oson, murakkab emas) interface for users to interact with.


Classes, Interfaces and Enumerations
The Card class represents(tasvirlamoq, ask ettirmoq) an ATM card with a card number and PIN.
The Account class represents a bank account with an account number and balance. It provides(ta'minlamoq, bermoq) methods to debit(kirim) and credit(qarz, ajratilgan pul) the account balance.
The Transaction class is an abstract base class for different types of transactions, such as(kabi) withdrawal and deposit. It is extended by WithdrawalTransaction and DepositTransaction classes.
The BankingService class manages the bank accounts and processes transactions. It uses a thread-safe ConcurrentHashMap to store and retrieve(topmoq, qaytarib olmoq, tiklamoq) account information.
The CashDispenser(cash - pul - biror nima tarqatuvchi) class represents the ATM's cash dispenser and handles the dispensing of cash. It uses synchronization to ensure thread safety when dispensing cash.
The ATM class serves as the main interface for ATM operations. It interacts with the BankingService and CashDispenser to perform user authentication, balance inquiry, cash withdrawal, and cash deposit.
The ATMDriver class demonstrates the usage of the ATM system by creating sample accounts and performing ATM operations.
