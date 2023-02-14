require('colors');

const { guardarDB  , leerDB} = require('./helpers/guardarArchivo');
const { inquireMenu, pauseInTerminal , leerInput, listaDeTareasEliminar , confirm, completarTareasChecklist} = require('./helpers/inquirer');

const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');




const main = async () => {

    let option = '';

    const tareas = new Tareas();

    const tareasDB = leerDB();
    
    if(tareasDB){
        tareas.cargarTareasPorArray(tareasDB)
    }



    do {

        option= await inquireMenu()


        switch(option){

            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
            break;

            case '2':
                tareas.listadoCompleto()
            break;

            case '3':
                tareas.listarPendientesOCompletadas(true);
            break;

            case '4':
                tareas.listarPendientesOCompletadas(false);
            break;

            case '5':
                const ids = await completarTareasChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
            break;

            case '6':
                
                const id  = await listaDeTareasEliminar( tareas.listadoArr);
                if(id !=='0'){
                    const confirmation = await confirm('¿Estas seguro?');
                    if(confirmation){
                        tareas.borrarTarea(id)
                    }
                }

            break;
        }

        guardarDB( tareas.listadoArr );

        console.log('\n')

        if( option !== '0' ) await pauseInTerminal();
        
    } while(option !== '0')

}

main()