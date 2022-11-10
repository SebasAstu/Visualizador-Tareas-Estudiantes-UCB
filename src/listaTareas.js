import Tarea from './tarea.js'

class Tareas{
    mostrar="";
    constructor(){
        this.listaTareas = [];
    }
    agregarTarea(Tarea){              
        this.listaTareas.push(Tarea);
        
        this.listaTareas=this.listaTareas.sort((a, b) => a.fecha - b.fecha);
    }

    mostrarlista(){
        let mostrar="";
        for(let i = 0;i<this.listaTareas.length;i++){
            mostrar+= '<br> Fecha:' + this.listaTareas[i].fecha.toISOString().slice(0, -14) +
            "<br> Materia: " + this.listaTareas[i].materia    + " Tarea: " + this.listaTareas[i].titulo;
        }
        return mostrar;
    }

    mostrarDetalle(tarea){
        const detalle="Materia:"+tarea.materia+"Tarea:"+tarea.titulo+"Descripcion:"+tarea.descripcion+"Fecha:"+tarea.fecha.toISOString().slice(0, -14);
        return detalle;
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