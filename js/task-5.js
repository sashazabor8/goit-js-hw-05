'use strict';

//  ** Напиши класс Car с указанными свойствами и методами.

class Car {
    /*
     * Добавь статический метод `getSpecs(car)`,
     * который принимает объект-машину как параметр и выводит
     * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
     */

    static getSpecs(car) {
        const { speed, price, maxSpeed, isOn, distance } = car;
        console.log('Скорость:', speed);
        console.log('Цена:', price);
        console.log('Максимальная скорость:', maxSpeed);
        console.log('Заведена:', isOn);
        console.log('Пробег:', distance);
    }

    /*
     * Конструктор получает объект настроек.
     *
     * Добавь свойства будущеего экземпляра класса:
     *  speed - текущая скорость, изначально 0
     *  price - цена автомобиля
     *  maxSpeed - максимальная скорость
     *  isOn - заведен ли автомобиль, значения true или false. Изначально false
     *  distance - общий киллометраж, изначально 0
     */
    constructor({ price, maxSpeed }) {
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.speed = 0;
        this.isOn = false;
        this.distance = 0;
    }

    /*
     * Добавь геттер и сеттер для свойства price,
     * который будет работать с свойством цены автомобиля.
     */

    get cost() {
        return this.price;
    }

    set cost(newPrice) {
        this.price = newPrice;
    }

    /*
     * Добавь код для того чтобы завести автомобиль
     * Записывает в свойство isOn значение true
     */
    turnOn() {
        this.isOn = true;
    }

    /*
     * Добавь код для того чтобы заглушить автомобиль
     * Записывает в свойство isOn значение false,
     * и сбрасывает текущую скорость в 0
     */
    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }

    /*
     * Добавялет к свойству speed полученное значение,
     * при условии что результирующая скорость
     * не больше чем значение свойства maxSpeed
     */
    accelerate(value) {
        if (this.speed + value < this.maxSpeed) this.speed += value;
    }

    /*
     * Отнимает от свойства speed полученное значение,
     * при условии что результирующая скорость не меньше нуля
     */
    decelerate(value) {
        if (this.speed - value > 0) this.speed -= value;
    }

    /*
     * Добавляет в поле distance киллометраж (hours * speed),
     * но только в том случае если машина заведена!
     */
    drive(hours) {
        if (this.isOn) this.distance = hours * this.speed;
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
console.log(mustang);
mustang.accelerate(100);
console.log(mustang);
mustang.decelerate(50);
console.log(mustang);
mustang.turnOn();
mustang.drive(10);
console.log(mustang);
