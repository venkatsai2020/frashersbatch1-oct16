interface Printable{
    name:string;
 print():any;
};
let circle: Printable={
    name:"circle",
    print(){
        console.log(this.name);
    }
};
let employee:Printable={
    name:"employ",
    age: Number=29;
    print(){
        console.log(this.name+" "+this.age);
    }
};
function printAll(...aa:Array<Object>) {
    for(let i of aa)
    {
        i.print();
    }
}
printAll(circle,employee);