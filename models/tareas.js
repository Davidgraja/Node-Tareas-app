
/**
 * _listado : 
 * 
 * {uuid-12451323245478-54545 : {id :12 , descripcion : abc , completadoEn : 2023-06-09}}
 * 
 */

const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    get listadoArr(){
        const listado = [];

        Object.keys( this._listado ).forEach( key => {
            const tarea = this._listado[key]
            listado.push(tarea);
        } )

        return listado
    }

    constructor () {
        this._listado = {};
    }


    borrarTarea( id = '' ){
        if(this._listado[id]) delete this._listado[id];
    }

    cargarTareasPorArray( tareas = [] ){
        tareas.forEach(tarea =>  this._listado[tarea.id]= tarea )
    }

    crearTarea (desc = '' ) {
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;

    }

    listadoCompleto (){

        const tareas = this.listadoArr

        console.log ('\n');

        tareas.forEach((tarea , i)=>{
            let numeroDeTarea = `${i + 1}.`.green;

            let estado = ( tarea.completadoEn) ? 'Completado'.green : 'Pendiente'.red;

            console.log(`${numeroDeTarea}` + ` ${tarea.descripcion} :: ` + estado );
        })
    
    }

    listarPendientesOCompletadas(estado){

        const data = this.listadoArr
        
        let tareas= []; 

        if(estado) tareas = data.filter(tarea=> tarea.completadoEn !== null)
        else if (!estado) tareas = data.filter(tarea=> tarea.completadoEn === null)    
        
        console.log ('\n');
        
        tareas.forEach((tarea , i)=>{
            let numeroDeTarea = `${i + 1}.`.green;

            let estado = ( tarea.completadoEn) ? 'Completado'.green : 'Pendiente'.red;

            if(tarea.completadoEn){
                console.log(`${numeroDeTarea}` + ` ${tarea.descripcion} :: ` + tarea.completadoEn );

            }

            else  console.log(`${numeroDeTarea}` + ` ${tarea.descripcion} :: ` + estado );
        })
        
    }

}

module.exports = Tareas;