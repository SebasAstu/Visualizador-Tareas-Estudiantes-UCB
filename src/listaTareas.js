import Tarea from './tarea.js'

class Tareas{
    mostrar="";
    constructor(){
        this.listaTareas = [];
    }
    agregarTarea(Tarea){              
        this.listaTareas.push(Tarea);
    }

    mostrarlista(){
        for(let i = 0;i<this.listaTareas.length;i++){
            this.mostrar+= '<br> Fecha:' + this.listaTareas[i].fecha +
            "<br> Materia: " + this.listaTareas[i].materia    + " Tarea: " + this.listaTareas[i].titulo;
        }
        return this.mostrar;
    }

    buscarTarea(titulo){
        for(let i = 0;i<this.listaTareas.length;i++){
            if(this.listaTareas[i].titulo==titulo){
                return this.listaTareas[i];
            }
        }

    }

}
export default Tareas;