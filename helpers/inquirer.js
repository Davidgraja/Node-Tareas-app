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
                name : `${'1.'.green} Crear tarea`
            },

            {
                value : '2' ,
                name : `${'2.'.green} Listar tareas`
            },
            
            {
                value : '3' ,
                name :  `${'3.'.green} Listar tareas completadas` 
            },
            {
                value : '4' ,
                name :  `${'4.'.green} Listar tareas pendientes` 
            },
            {
                value : '5' ,
                name : `${'5.'.green} completar tarea(s)`
            },
            {
                value : '6' ,
                name : `${'6.'.green} Borrar tarea`
            },
            {
                value : '0' ,
                name : `${'0.'.green} Salir`
            },
        ] 
    }
]

const prompt = inquirer.createPromptModule();

const inquireMenu = async () =>{
    console.clear();

    console.log('================='.green);
    console.log('selecione una opción '.white);
    console.log('=================\n'.green);


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



    const event = await prompt(inputPause);
    
    return event
}


const leerInput = async (message)=> {

    const question = [
        {
            type:'input',
            name : 'desc',
            message,
            validate( value ){
                if( value.length === 0 ){
                    return ' Por favor ingrese una Descripción ';
                }

                return true;
            }
        }
    ];


    const {desc} = await prompt(question);

    return desc;

}


const listaDeTareasEliminar = async (tareas = []) =>{

    console.log('\n')

    const  choices = tareas.map( (tarea , i) => {

        let  numeroDeTarea = i + 1 
        return {
            value : tarea.id,
            name : `${numeroDeTarea}.`.green + ` ${tarea.descripcion} `

        }

    } )

    choices.unshift({
        value : '0',
        name : `0.`.green + ' Salir'
    })

    const question = [
        {
            type : 'list',
            name : 'id',
            message : 'Borrar : ',
            choices
        }
    ]
    const {id} = await prompt(question)
    return id
}



const  confirm =  async ( message ) => {

    const question = [
        {
            type:'confirm',
            name : 'ok',
            message

        }
    ]

    const {ok} = await  prompt(question);
    return ok;
}

module.exports = {
    inquireMenu,
    pauseInTerminal,
    leerInput,
    listaDeTareasEliminar,
    confirm
}