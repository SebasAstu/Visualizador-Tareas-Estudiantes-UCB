class Docente 
{
     tareas=[];

     crearTarea(materia, titulo,descipcion,fecha,tiempoEstimado)
     {
        var tarea = new Object();

        tarea.materia= materia;
        tarea.titulo=titulo;
        tarea.descipcion=descipcion;
        tarea.fecha=fecha;
        tarea.tiempoEstimado=tiempoEstimado;
        
        this.tareas.push(tarea);
     }
}
export default Docente;