function BankAccount(ac_no,name,type,balance){
    this.account_number = ac_no;
    this.holder_name = name;
    this.type = type;
    this.balance = balance;
}


// Desposite 
BankAccount.prototype.deposite = function(amount){
    if(amount>0){
        this.balance = this.balance + amount;
        console.log(`Deposite amount:- ${amount} in your account Mr/Mrs ${this.holder_name}`);
    }
    else{
        console.log(`Invalid Desposite amount`);
    }
};

// Withdrawl
BankAccount.prototype.withdrawl = function(amount){
    if(amount>0 && amount<=this.balance){
        this.balance = this.balance - amount;
        console.log(`Withdrawl amount:- ${amount} from your account Mr/Mrs ${this.holder_name}`);
    }
    else{
        console.log(`Invalid Withdrawl amount`);
    }
}

// Check Balance
BankAccount.prototype.checkBalance = function(){
    console.log(`Your Bank Balance is:- ${this.balance} Mr/Mrs ${this.holder_name}`);
}

// Check active (if account balance is less than 0 then it is inactive)
BankAccount.prototype.isActive = function(){
    if(this.balance>0){
        console.log(`Your Bank account is Active`);
    }
    else{
        console.log(`Your Bank account is deactivated`);
    }
}
// Calculate total balance in all accounts
function getTotalBalance(accounts) {
    const totalBalance =  accounts.reduce((total, account) => {
        if (account.balance>0) {
            return total + account.balance;
        }
        return total;
    }, 0);
    console.log(`Total balance in all accounts is:- ${totalBalance}`);
}

let account1 = new BankAccount(123, "Rishiraj", "Saving", 2000);
account1.deposite(200);
account1.withdrawl(400);
account1.checkBalance();
account1.isActive();

let account2 = new BankAccount(124, "Rohan", "Current", 100);
account2.deposite(200);
account2.checkBalance();
account2.isActive();

// To calculate the total balance in all acitve accounts
const accounts = [account1, account2];
const total = getTotalBalance(accounts);
