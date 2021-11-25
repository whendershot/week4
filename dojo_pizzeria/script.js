"use strict";

function pizzaOven(crustType, suaceType, cheese, toppings) {
    var Pizza = {};
    Pizza.crustType = crustType;
    Pizza.suaceType = suaceType;
    Pizza.cheese = cheese;
    Pizza.toppings = toppings;
    return Pizza;
}

var order1 = [
    pizzaOven("deep dish", "traditional", ["mozzerella"], ["pepperoni", "saussage"]),
    pizzaOven("hand tossed", "marinara", ["mozzerella", "feta"], ["mushrooms", "olives", "onions"]),
    pizzaOven("cheese filled", "white", ["cheddar"], ["onions", "olives"]),
    pizzaOven("deep dish", "marinara", ["mozzerela", "feta", "cheddar"], [])
];

console.log(order1);

const valid_crusts = ["deep dish", "hand tossed", "cheese filled"];
const valid_sauces = ["marinara", "traditional", "white"];
const valid_chesses  = ["cheddar", "feta", "mozzerella"];
const valid_toppings = ["onions", "olives", "mushrooms", "pepperoni", "saussage"];

function getRandomInt (min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

function randomPizza(numCheeses, numToppings) {
    let crust = "";
    let sauce = "";
    let cheeses = [];
    let toppings = [];
    
    crust = valid_crusts[getRandomInt(0, valid_crusts.length)];
    sauce = valid_sauces[getRandomInt(0, valid_sauces.length)];

    for (let i = 0; i < numCheeses; i++){
        cheeses.push(valid_chesses[getRandomInt(0, valid_chesses.length)]);
    }

    for (let i = 0; i < numToppings; i++){
        toppings.push(valid_toppings[getRandomInt(0, valid_toppings.length)]);
    }

    return pizzaOven(crust, sauce, cheeses, toppings);
}

var order2 = [
    randomPizza(2,1),
    randomPizza(1,0),
    randomPizza(0,4),
    randomPizza(0,0),
    randomPizza(3,1)
];
console.log(order2);