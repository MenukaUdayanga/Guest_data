const chalk = require('chalk');

//data save

// console.log("gestdb.js");

const name ="Menuka";
// const age =24;


// create

const add =() =>{

   console.log(chalk.green("Adding"),chalk.red(" Books"));
}

//View

const view =() => console.log(chalk.yellow("View"));



module.exports={
    name,
    add,
    view

};

