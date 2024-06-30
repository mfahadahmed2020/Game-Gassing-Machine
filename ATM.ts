#! /usr/bin/env node
import money from "money";

import inquirer from "inquirer";

let myBalance = 30000; 

let myPin = 1234;

let pinAnswer = await inquirer.prompt({
  name: "pin",
  message: "enter your pin",
  type: "number",
});
if (pinAnswer.pin === myPin) {
  console.log("Your pin is corrent!!!");
} else {
  console.log("Your pin is wrong!!!");
}
let operationAns = await inquirer.prompt([
  {
    name: "operation",
    message: "please select option",
    type: "list",
    choices: ["withdraw", "Fast cash", "check balance"],
  },
]);
// if user select withdraw option
if (operationAns.operation === "withdraw") {
  let amountAns = await inquirer.prompt([
    {
      name: "amount",
      message: "Enter your amount",
      type: "number",
    },
  ]);
  if (amountAns.amount > myBalance) {
    console.log(money("Insufficient balance"));
  } else {
    let balance = myBalance - amountAns.amount;
    console.log(money("Your remaining balance is: " + balance));
  }
}
//if user select fast cash
else if (operationAns.operation === "Fast cash") {
  let FastcashAns = await inquirer.prompt([
    {
      name: "amount",
      type: "list",
      choices: [10000, 20000, 30000, 40000],
    },
  ]);
  if (FastcashAns.amount <= myBalance) {
    let balance = myBalance - FastcashAns.amount;
    console.log(money("Your remaining balance is: " + balance));
  } else {
    console.log(money("Insufficient balance"));
  }
  // if user select check balance
} else if (operationAns.operation === "check balance") {
  console.log(money("Remaing balance:" + myBalance));
} else {
  console.log("Your pin is wrong!!!");
}