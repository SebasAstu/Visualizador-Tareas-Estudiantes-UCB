class Tarea 
{     
   constructor(materia,titulo,descripcion,fecha,tiempoEstimado,etiqueta)
   {            
      this.materia= materia;
      this.titulo=titulo;
      this.descripcion=descripcion;
      this.fecha=new Date (fecha);
      this.tiempoEstimado=tiempoEstimado;  
      this.etiqueta=etiqueta;  
   }     
   //getMateria(){
   //   return this.materia;
   //}
   //getTarea(){
   //   return this.titulo;
   //}
   //getfech(){
   //   return this.fecha;
   //}
}
export default Tarea;