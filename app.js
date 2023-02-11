const { inquireMenu, pauseInTerminal } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

require('colors');



const main = async () => {

    let option = ''

    do {

        option= await inquireMenu()
        console.log('\n')
        if( option !== '0' ) await pauseInTerminal();
        
    } while(option !== '0')

}

main()