class Tarea 
{     
   constructor(materia,titulo,descripcion,fecha,tiempoEstimado)
   {            
      this.materia= materia;
      this.titulo=titulo;
      this.descripcion=descripcion;
      this.fecha=new Date (fecha);
      this.tiempoEstimado=tiempoEstimado;    
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