import inquirer from "inquirer";
let myBalance = 10000;
let mypin = 1234;
let pinEntered = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin number"
    }
]);
if (pinEntered.pin === mypin) {
    let atmQuestion = await inquirer.prompt([
        {
            name: "accountType",
            type: "list",
            message: "select your account type",
            choices: [
                "current account ",
                "Saving account"
            ]
        },
        {
            name: "cashmethod",
            type: "list",
            message: "select your cashtype",
            choices: [
                "Cash withdraw",
                "fast cash"
            ]
        }
    ]);
    if (atmQuestion.cashmethod === "Cash withdraw") {
        let cashwithdrawAmount = await inquirer.prompt([
            {
                name: "withdrawl",
                message: "enter your Amount",
                type: "number",
            }
        ]);
        if (myBalance >= cashwithdrawAmount.withdrawl) {
            myBalance -= cashwithdrawAmount.withdrawl;
            console.log(`your total balance is:${myBalance}`);
        }
        else {
            console.log("insufficient Balance");
        }
    }
    else {
        let fastcashAmount = await inquirer.prompt([
            {
                name: "fastcash",
                message: "select the amount yo want to withdraw",
                type: "list",
                choices: [
                    "1000",
                    "3000",
                    "5000"
                ]
            }
        ]);
        if (myBalance >= fastcashAmount.fastcash) {
            myBalance -= fastcashAmount.fastcash;
            console.log(`your remaining amount is:${myBalance}`);
        }
        else {
            console.log("insufficient balance");
        }
    }
}
else {
    console.log("Incorrect pincode");
}
