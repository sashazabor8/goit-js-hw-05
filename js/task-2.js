'use strict';

//  ** Напиши класс User для создания пользователя со следующим свойствами:
//  ** name - строка
//  ** age - число
//  ** followers - число
//  ** Добавь метод getInfo(), который, выводит строку:
//  ** User ${ имя } is ${ возраст } years old and has ${ кол - во фоловеров } followers

class User {
    constructor({ name = '', age = 0, followers = 0 }) {
        this.name = name;
        this.followers = followers;
        this.age = age;
    }

    getInfo() {
        console.log(
            ` User ${this.name} is ${this.age} years old and has ${this.followers} followers`
        );
    }
}

const mango = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
});

mango.getInfo();

const poly = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
});

poly.getInfo();
