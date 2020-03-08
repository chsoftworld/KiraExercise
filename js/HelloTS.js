"use strict";
function greeter(person) {
    return "Hello, " + person;
}
// let user = "Jane User";
let user = [0, 1, 2];
function personSayHello(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let zhangsan = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = personSayHello(zhangsan);
class asia {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getPersonName() {
        return `Hello ${this.firstName} + " " + ${this.lastName}`;
    }
}
let asiaPerson = new asia("Josh", "Huang");
let resultName = asiaPerson.getPersonName();
console.log(resultName);
