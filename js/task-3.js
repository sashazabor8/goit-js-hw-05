'use strict';

//  ** Напиши класс Storage, который будет создавать объекты для управления складом товаров.
//  ** При вызове будет получать один аргумент - начальный массив товаров,
//  ** и записывать его в свойство items.
//  ** Добавь методы класса:
//  ** getItems() - возвращает массив текущих товаров
//  ** addItem(item) - получает новый товар и добавляет его к текущим
//  ** removeItem(item) - получет товар и, если он есть, удаляет его из текущих

class Storage {
    constructor(array) {
        this.items = array;
    }

    getItems() {
        return this.items;
    }

    addItem(...item) {
        return this.items.push(...item);
    }

    removeItem(item) {
        this.items.includes(item) ? this.items.splice(this.items.indexOf(item), 1) : '';

        //? второй метод
        // for (const key of this.items) {
        //     if (item === key) {
        //         this.items.splice(this.items.indexOf(key), 1);
        //     }
        // }
    }
}

const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор']);

const items = storage.getItems();
console.table(items);

storage.addItem('Дроид');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.table(storage.items);
