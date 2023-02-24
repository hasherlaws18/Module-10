
const fs = require('fs');
const Employee = require("../Module-10/lib/Employee");
const Engineer = require('../Module-10/lib/Engineer');
const Intern = require('../Module-10/lib/Intern');
const Manager = require('../Module-10/lib/Manager');
const { choices } = require('yargs');
const inquirer = require('inquirer');

const Managerprompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'Teamname',
            message: 'What is your team managers name',
        },
        {
            type: 'input',
            name: 'ManagerID',
            message: 'What is your manamgers employee ID',
        },
        {
            type: 'input',
            name: 'Manageremail',
            message: 'What is your managers email adress',
        },
        {
            type: 'input',
            name: 'Managerofficenumber',
            message: 'What is your managers office number',
        },

    ])
    
    .then(response => {
        const manager = new Manager(response.Teamname, response.ManagerID, response.Manageremail, response.Managerofficenumber);
    })}

    const Choiceprompt = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'Choices',
                message: 'Would you like to choice a engineer, intern, or finish your team?',
                choices: [
                    'enginner',
                     'intern',
                     'finish your team',
                ],
            },
        ])
    }

    const Engineerprompt = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'Engineername',
                message: 'What is your engineer name',
            },
            {
                type: 'input',
                name: 'EngineerID',
                message: 'What is your enginner ID',
            },
            {
                type: 'input',
                name: 'EnginnerEmail',
                message: 'What is your engineer email'
            },
            {
                type: 'input',
                name: 'Github',
                message: 'What is your engineers github username'
            },
       ])
       .then(response => {
        const engineer = new Engineer(response.Engineername, response.EngineerID, response.EngineerEmail, response.Github)
    })

    }
 const Internprompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name:'InternName',
            message:'What is your Interns Name',
        },
        {
            type: 'input',
            name: 'InternID',
            message: 'What is your Interns employee ID',
        },
        {
            type: 'input',
            name: 'InternEmail',
            message: 'What is your Interns email',
        },
        {
            type: 'input',
            name: 'InternSchool',
            message: 'What is your interns School'
        },
    ])
    .then(response => {
        const intern = new Intern(response.InternName, response.InternID, response.InternEmail, response.InternSchool)
    })
 }

