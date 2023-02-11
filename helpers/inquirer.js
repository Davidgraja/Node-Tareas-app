const inquirer = require('inquirer');
require('colors');

const  menuOptions = [
    {
        type: 'list',
        name : 'opcion',
        message : '¿ que desea hacer ?',
        choices: [
            {
                value : '1' ,
                name : '1. Crear tarea'
            },

            {
                value : '2' ,
                name : '2. Listar tareas'
            },
            
            {
                value : '3' ,
                name : '3. Listar tareas completadas'
            },
            {
                value : '4' ,
                name : '4. Listar tareas pendientes'
            },
            {
                value : '5' ,
                name : '5. completar tarea(s)'
            },
            {
                value : '6' ,
                name : '6. Borrar tarea'
            },
            {
                value : '0' ,
                name : '0. Salir'
            },
        ] 
    }
]


const inquireMenu = async () =>{
    console.clear();

    console.log('================='.green);
    console.log('selecione una opción '.cyan);
    console.log('=================\n'.green);

    const prompt = inquirer.createPromptModule();

    const {opcion} = await prompt(menuOptions);

    return opcion;
}


const pauseInTerminal = async () =>{

    const inputPause = [

        {
            type : 'input',
            name : 'pause',
            message : `Presione ${'ENTER'.green} para continuar`
        }
    
    ]


    const prompt = inquirer.createPromptModule();

    const event = await prompt(inputPause);
    
    return event
}

module.exports = {
    inquireMenu,
    pauseInTerminal
}