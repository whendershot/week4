"use strict";

const VALID_OPERATIONS = ["+", "-", "/", "*"];

var operands = [];
var current_operand = 0;
var operation = "";

function press(num) {
    let temp = current_operand.toString();
    temp += num;
    temp = parseInt(temp);
    current_operand = temp;
    console.log(`Adding: ${num}, Setting operand to ${temp}`);
    update();
}

function setOP(op) {
    if (VALID_OPERATIONS.includes(op)) {
        operation = op;        
        console.log(`Setting operation to: ${op} `);
    }
    update();
}

function calculate (){
    update();
}

function clr () {
    update();
}

function update () {
    $("#display").text(current_operand.toString());
}