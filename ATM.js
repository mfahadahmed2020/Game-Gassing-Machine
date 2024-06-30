#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const money_1 = __importDefault(require("money"));
const inquirer_1 = __importDefault(require("inquirer"));
let myBalance = 30000;
let myPin = 1234;
let pinAnswer = await inquirer_1.default.prompt({
    name: "pin",
    message: "enter your pin",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log("Your pin is corrent!!!");
}
else {
    console.log("Your pin is wrong!!!");
}
let operationAns = await inquirer_1.default.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "Fast cash", "check balance"],
    },
]);
// if user select withdraw option
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer_1.default.prompt([
        {
            name: "amount",
            message: "Enter your amount",
            type: "number",
        },
    ]);
    if (amountAns.amount > myBalance) {
        console.log((0, money_1.default)("Insufficient balance"));
    }
    else {
        let balance = myBalance - amountAns.amount;
        console.log((0, money_1.default)("Your remaining balance is: " + balance));
    }
}
//if user select fast cash
else if (operationAns.operation === "Fast cash") {
    let FastcashAns = await inquirer_1.default.prompt([
        {
            name: "amount",
            type: "list",
            choices: [10000, 20000, 30000, 40000],
        },
    ]);
    if (FastcashAns.amount <= myBalance) {
        let balance = myBalance - FastcashAns.amount;
        console.log((0, money_1.default)("Your remaining balance is: " + balance));
    }
    else {
        console.log((0, money_1.default)("Insufficient balance"));
    }
    // if user select check balance
}
else if (operationAns.operation === "check balance") {
    console.log((0, money_1.default)("Remaing balance:" + myBalance));
}
else {
    console.log("Your pin is wrong!!!");
}
