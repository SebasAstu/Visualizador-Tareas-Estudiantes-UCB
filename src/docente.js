import Tarea from "./tarea";
class Docente 
{
     tareas=[];
     indice=0;

     crearTarea(materia, titulo,descipcion,fecha,id)
     {
        let tarea = new Tarea(materia,titulo,descipcion,fecha,id);
        this.tareas.push(tarea);
       
     }
}
export default Docente;