'use strict';

//  **Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.
//  **В prototype функции - конструктора добавь метод getInfo(),
//  ** который выводит в консоль значения полей login и email объекта который его вызвал.

const Account = function ({ login, email }) {
    this.login = login;
    this.email = email;

    this.getInfo = function () {
        console.log('LOGIN: ', login);
        console.log('EMAIL: ', email);
    };
};

const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
});

console.log(mango);
mango.getInfo();

const poly = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
});

console.log(poly);
poly.getInfo();
