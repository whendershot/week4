"use strict";

// Print odds 1-20
let result = "";
for (let i = 1; i <= 20; i+=2){
    result += i + ", ";
}
console.log("Print odds 1-20");
console.log(result);


result = "";
//Decreasing multiples of 3
for (let i = 100; i >= 0; i--) {
    if ((i % 3) == 0){
        result += i + ", ";
    }
}
console.log("Decreasing multiples of 3");
console.log(result);

//Print the sequence
let sequence = [4, 2.5, 1, -0.5, -2, -3.5];
result = "";
for (let i = 0; i < sequence.length; i++){
    result += sequence[i] + ", ";
}
console.log("Print the sequence");
console.log(result);

//Sigma
result = 0;
for (let i = 1; i <= 100; i++){
    result += i;
}
console.log("Sigma");
console.log(result);

//Factorial
result = 1;
for (let i = 2; i <= 12; i++){
    result *= i;
}
console.log("Factorial");
console.log(result);