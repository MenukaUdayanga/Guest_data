const chalk = require('chalk');
const fs = require('fs');

const db_file = "data.json";

// create

const addGust =(name,address,contact_no,visit_date) =>{

   const guests =loadguest();
   guests.push({
      name:name,
      address:address,
      contact_no:contact_no,
      visit_date:visit_date
   });

   saveGuest(guests);


   console.log(chalk.green("Data saved.!"));
}

//Update

const updateGust =(id,name,address,contact_no,visit_date) =>{

    console.log(chalk.yellow("Update "+id));
 }

 //Delete

const deleteGust =(id) =>{

    console.log(chalk.red("Delete "+id));

 }

 //Read

const readGust =(id) =>{

   console.log(chalk.blue("Read "+id));

}

 //List

const listGust =() =>{

    console.log(chalk.yellow("List"));
 }


 const  saveGuest = (guests) =>{

   const dataJOSON = JSON.stringify(guests);
   fs.writeFileSync("data.json",dataJOSON);


 }

 const loadguest =() =>{
   const dataBuffer = fs.readFileSync(db_file);
   const dataJSON = dataBuffer.toString();
   return JSON.parse(dataJSON);
  
 }




module.exports={addGust,updateGust,deleteGust,readGust,listGust};

