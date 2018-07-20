'use strict';

/**
 * Функция выполняет наследование
 * @param {Function} Main - класс который должен стать наследником
 * @param {Function} Parent - родительский класс
 */
function extendClass(Main, Parent) { 
    Main.prototype = Object.create(Parent.prototype);
    Main.prototype.constructor = Main;
}

function Animal() {
}

Animal.prototype.walk = function () {}


function Rabbit() {
}

extendClass(Rabbit, Animal);

Rabbit.prototype.jump = function () {}

let rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Animal);

console.log(typeof rabbit.walk === 'function');
console.log(typeof rabbit.jump === 'function');


