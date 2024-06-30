console.log("Guess a number between 1 to 8");
// Now Varible Create
let a:number=Math.floor(Math.random()*7)
import inquirer from "inquirer";
while(true){
  let input =await inquirer.prompt(
    {name: "guess",type:"number",
message:"Enter your guess number you want:   "})


// Provide Code
let ans:number= input.guess
if (a==ans)
{console.log("congratulation your guess number absolutely correct")
break;}
else{console.log("Sorry you guess wrong number try again")}
}