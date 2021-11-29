"use strict";

const VALID_OPERATIONS = ["+", "-", "/", "*"];

var operands = [];
var current_operand = 0;
var current_operation = "";

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
        if (current_operation === "") {
            current_operation = op;
            operands.push(current_operand);
            current_operand = 0;

        }
        console.log(`Setting operation to: ${op}`);
    }
    
    update();
}

function calculate (){
    let lhs = current_operand;
    let rhs = operands.pop();

    switch(current_operation) {
        case "+":
            current_operand = lhs + rhs;
        case "-":
            current_operand = lhs - rhs;
        case "/":
            current_operand = lhs / rhs;
        case "*":
            current_operand = lhs * rhs;
    }

    current_operation = "";
    update();
}

function clr () {
    operands = [];
    current_operand = 0;
    current_operation = "";
    
    update();
}

function update () {
    $("#display").text(current_operand.toString());
}