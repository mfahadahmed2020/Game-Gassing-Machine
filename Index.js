"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Guess a number between 1 to 8");
// Now Varible Create
let a = Math.floor(Math.random() * 7);
const inquirer_1 = __importDefault(require("inquirer"));
while (true) {
    let input = await inquirer_1.default.prompt({ name: "guess", type: "number",
        message: "Enter your guess number you want:   " });
    // Provide Code
    let ans = input.guess;
    if (a == ans) {
        console.log("congratulation your guess number absolutely correct");
        break;
    }
    else {
        console.log("Sorry you guess wrong number try again");
    }
}
