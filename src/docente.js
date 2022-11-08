class Docente 
{
     tareas=[];

     crearTarea(materia, titulo,descipcion,fecha)
     {
        var tarea = new Object();

        tarea.materia= materia;
        tarea.titulo=titulo;
        tarea.descipcion=descipcion;
        tarea.fecha=fecha;
        
        this.tareas.push(tarea);
     }
}
export default Docente;