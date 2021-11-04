/*
Trying out math operators
*/

// Use all the modern JS goodiness
"use strict";

// Example for a unary operator
let negativeNumber = -5;

// Example for binary operator
let difference = 5 - 3;

// Find the reminder when dividing 20 by 3
let remainder = 20 % 3;

// Raise 5 to the power 3
let fivePower = 5 ** 3;

// Stiching two strings together (concatenation)
let firstString = "Hello ";
let secondString = "World!";
let stitchedString = firstString + secondString;

// Stitching a string and a number converts the number to a string
let anotherString = "The answer to life is ";
let justANumber = 42;
let stitch = anotherString + justANumber;

// Concatenation gotchas!
let mySum = "1" + 1 + 1 + "3"; // Here the answer will be 1113
let anotherSum = 1 + 2 + "3"; // Here the answer will be 33
let newSum = "1" + 2 + 3; // Here the answer will be 123

// The unary + operator can be used as an alternative to Number() method
let justAnotherString = "5";
let justAnotherNumber = +justAnotherString; // Will convert justAnotherString to a number

// Unary + can be used to convert strings on the fly for summing them
let theNumberNine = "9";
let theNumberSeven = "7";
let sumOfNumbers = +theNumberNine + +theNumberSeven; // This will result in 16


