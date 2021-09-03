const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const noteHandler = require('./noteHandler');


//Setting the application version
yargs.version('1.0.0');

//Adding comands
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler: function (argv) {
        noteHandler.addNote(argv.title, argv.body);
    }
});
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler: function (argv) {
        noteHandler.removeNote(argv.title);
    }
});
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log(chalk.yellow("Listing out notes..."));
        noteHandler.listNote();
    }
});


//Parsing the arguments


yargs.parse()















