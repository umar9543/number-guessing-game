#!/usr/bin/env node
import inquirer from "inquirer";

type numbertype = {
    userguess: number
}

   
async function guessing() {
    const  num = Math.floor((Math.random() * 10)+1)

    await inquirer.prompt([
        {
            type: "number",
            name: "userguess",
            message: "guess the number:"
        }

    ])
        // answers();

        //const {userguess}=answers;
        .then((answer) => {
            console.log( "system guess:",num);
            if (answer.userguess === num) {
                console.log("huray you win");

            }
            else {
                console.log("try again");

            }
        })
       
        
}

async function start() {
    do {
        await guessing();
        var again = await inquirer
            .prompt({
                type: "input",
                name: "restart",
                message: "press y for continue and n for leave:"
            });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES');
}
start();

