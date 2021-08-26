class Account{
    id: Number;
    name: string;
    balance: Number;
    constructor(id:Number,name:string,balance: Number)
    {
        this.id=id;
        this.name=name;
        this.balance=balance;
    }
}
class SavingAccount extends Account{
    interest:Number;
    constructor(id:Number,name:string,balance:Number,interest:Number)
    {
        super(id,name,balance);
        this.interest=interest;
    }
}
class CurrentAccount extends Account{
    cash_credit:Number;
    constructor(id:Number,name:string,balance:Number,cash_credit:Number)
    {
        super(id,name,balance);
        this.cash_credit=cash_credit;
    }
}
let sa=new SavingAccount(1,"2",3,4);
let ca=new CurrentAccount(1,"2",3,5);
function cal()
{
    if(sa.id==ca.id)
    {
        console.log(sa.interest*ca.cash_credit);
    }
}
cal();