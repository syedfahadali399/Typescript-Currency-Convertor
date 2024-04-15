#! /usr/bin/env node

import inquirer from "inquirer";

const currencyrates:any = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    CYN: 7.24,
    INR: 74.57,
    JPV: 153,
    PKR: 280
}

let useranswer = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Enter From Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "CYN", "INR", "JPV", "PKR"]
        },
        {
            name: "to",
            message: "Enter To Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "CYN", "INR", "JPV", "PKR"]
        },
        {
            name: "amount",
            message: "Enter Your Amount",
            type: "number" 
        }
    ]
)

let fromamount = currencyrates[useranswer.from]
let toAmount = currencyrates[useranswer.to]
let amount = useranswer.amount
let baseAmount = amount / fromamount
let convertedAmount = baseAmount * toAmount

console.log(convertedAmount);