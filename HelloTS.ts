function greeter(person: Array<number>) {
    return "Hello, " + person;
}
// let user = "Jane User";
let user = [0, 1, 2];
// document.body.innerHTML = greeter(user);

interface Person {
    firstName : string;
    lastName : string;
}

function personSayHello(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let zhangsan = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = personSayHello(zhangsan);

class implements Person {
    firstName: string;    
    lastName: string;

    constructor(firstName:string, lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getPersonName(){
        return `Hello ${this.firstName} + " " + ${this.lastName}`
    }
}

let asiaPerson = new asia("Josh","Huang");
let resultName = asiaPerson.getPersonName();
console.log(resultName);