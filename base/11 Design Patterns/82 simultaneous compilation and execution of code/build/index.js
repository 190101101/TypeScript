"use strict";
class User {
    constructor(username, password, age) {
        this.username = username;
        this.password = password;
        this.age = age;
    }
    getUserInfo() {
        return `username: ${this.username} | password: ${this.password} | age: ${this.age}`;
    }
}
const user = new User('apsi', 'apsi2002', 15);
console.log(user.getUserInfo());
