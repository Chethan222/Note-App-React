const fs = require('fs');
const chalk = require('chalk');


//Function to add the notes
const addNote = function (title, body) {
    const notes = getNote();
    //const duplicates = notes.filter((note) => note.title === title);
    const duplicate = notes.find((note) => note.title === title);

    if (!duplicate) {
        const newNote = {
            id:Date.now(),
            title: title,
            contents:body
        }

        notes.push(newNote)
        saveNote(notes)
        console.log(chalk.green("Adding a new note... "));
        beautify(title, body);
    } else {
        console.log(chalk.red.inverse("Note title already taken!"));
    } 
}

const beautify = (title, body) => {
    console.log(chalk.green(' Title : \"' + title + '\"'));
    console.log(chalk.green(' Contents : \"' + body + '\"\n'));
}
//Function to save notes
const saveNote = (note) => {
    note = JSON.stringify(note)
    fs.writeFileSync('notes.json',note);
}

//Function to remove the notes
const removeNote = function (title) {
    const existingNotes = getNote();
    const newNotes = existingNotes.filter((note) => !(note.title === title));

    if (existingNotes.length > newNotes.length) {
        console.log(chalk.green("Removing note \""+title+"\" ..."));
    } else {
        console.log(chalk.red("No note found named " +'\"'+ title+'\"'));
    }

    saveNote(newNotes)
}
//Function to list the notes
const listNote = function () {
    const notes = getNote();
    notes.forEach((note) => beautify(note.title, note.contents));  
}


//Function to get notes
const getNote = function () {
    try{
        var contents = fs.readFileSync('notes.json').toString();
        return JSON.parse(contents);
    }
    catch (e) {
        return []
    }
}

module.exports = {
    addNote,
    getNote,  
    removeNote,
    listNote
}