const db = require("./gestdb");
const yargs = require('yargs');

yargs.version('1.1.2');

//Add

yargs.command({
    command: 'add',
    describe: 'To add a guest',
    builder:{
        name:{
            describe:'Name',
            demandOption:true,
            type:'string'

        },
        address:{

            describe:"Address",
            demandOption:true,
            type:'string'
        },
        contact_no:{

            describe:"Contact_no",
            demandOption:true,
            type:'number'
        },
        visit_date:{

            describe:"Visit_date",
            demandOption:true,
            type:'string'
        },
        

    },
    
    handler:function(argv){
        db.addGust(argv.name,argv.address,argv.contact_no,argv.visit_date);
    }
});

//Update

yargs.command({
    command: 'update',
    describe: 'To update a guest',
    builder:{
        id:{
            describe:'Id',
            type:'string'

        },
        name:{
            describe:'Name',
            type:'string'

        },
        address:{

            describe:"Address",
            type:'string'
        },
        contact_no:{

            describe:"Contact_no",
            type:'number'
        },
        visit_date:{

            describe:"Visit_date",
            type:'string'
        },
        

    },
   
    handler:function(argv){
        db.addGust(argv.id,argv.name,argv.addGust,argv.contact_no,argv.visit_date);
    }
});

//Delete

yargs.command({
    command: 'delete',
    describe: 'To delete a guest',
    builder:{
        id:{
            describe:'Id',
            type:'string'

        }
    },
   
    handler:function(argv){
        db.deleteGust(argv.id);
    }
});

//Read

yargs.command({
    command: 'read',
    describe: 'To read a guest',
    builder:{
        id:{
            describe:'Id',
            type:'string'

        }
    },
   
    handler:function(argv){
        db.readGust(argv.id);
    }
});

//List

yargs.command({
    command: 'list',
    describe: 'To list all the guests',
    
    handler:function(){
        db.listGust();
    }
});



yargs.parse();
// console.log(yargs.argv);

