const { inquireMenu, pauseInTerminal } = require('./helpers/inquirer');

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