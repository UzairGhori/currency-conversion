import inquirer from "inquirer";
import chalk from "chalk";
let currency = {
    USD: 1,
    EUR: 0.92,
    PKR: 277.54,
    INR: 83.3,
    SAR: 3.75,
    AED: 3.67
};
console.log(chalk.bold(chalk.yellowBright("Wellcome To Currency Conversion")));
let user_ans = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: (chalk.blue("Enter from currency")),
        choices: ["USD", "EUR", "PKR", "INR", "SAR", "AED"],
    },
    {
        name: "to",
        type: "list",
        message: (chalk.magenta("Enter to currency")),
        choices: ["USD", "EUR", "PKR", "INR", "SAR", "AED"],
    },
    {
        name: "amount",
        type: "number",
        message: (chalk.green("Enter your amount")),
    }
]);
let fromAmount = currency[user_ans.from];
let toAmount = currency[user_ans.to];
let amount = user_ans.amount;
let baisAmount = amount / fromAmount;
let convertedAmount = baisAmount * toAmount;
console.log(convertedAmount);
