const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

try {
    // Customize yargs version
    yargs.version('1.1.0');

    yargs.command({
        command: 'add',
        describe: 'Adding new note',
        builder: {
            title: {
                describe: 'Title of note',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Title of note',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv){
            /* console.log('Hnadler: adding a note with title-: ' + argv.title);
            console.log('Hnadler: adding a note with body-: ' + argv.body); */
            notes.addNote(argv.title, argv.body);
        }
    });

    yargs.command({
        command: 'remove',
        describe: 'remove new note',
        builder: {
            title: {
                describe: 'Note title to removed',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv){
            notes.removeNote(argv.title);
        }
    })

    yargs.command({
        command: 'read',
        describe: 'reading new note',
        builder: {
            title: {
                describe: 'Note title to removed',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            notes.readNote(argv.title);
        }
    })

    yargs.command({
        command: 'list',
        describe: 'read new note',
        handler() {
            notes.listNotes();
        }
    })

    //console.log(yargs.argv)
    yargs.parse();
} catch(e) {
    console.log(e);
}
