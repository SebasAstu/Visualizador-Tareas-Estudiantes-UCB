import Tarea from './tarea.js'
import estudiantes from './estudiantes.json'

class Tareas{
    mostrar="";
    constructor(){
        this.listaTareas = [];
        this.listaTareaAux=[];
    }
    agregarTarea(Tarea){              
        this.listaTareas.push(Tarea);
        
        this.listaTareas=this.listaTareas.sort((a, b) => a.fecha - b.fecha);
    }

    agregarAux(fecha)
    {
        let mostrar="";
        this.listaTareaAux=[];
        let estudiantesAux=[0,0,0,0,0,0,0,0,0,0];
        let estudiantesAux2=["","","","","","","","","",""];
        for(let i = 0;i<this.listaTareas.length;i++){
            if(fecha== this.listaTareas[i].fecha.toISOString().slice(0, -14))
            {
                this.listaTareaAux.push(this.listaTareas[i]);
            }
        }
        
        for(let j=0;j<estudiantes.estudiantes.length;j++){
            let resul=":";
            let conta =0;
            for(let x=0;x<estudiantes.estudiantes[j].materia.length;x++){
                for(let i = 0;i<this.listaTareaAux.length;i++){
                    if(this.listaTareaAux[i].materia == estudiantes.estudiantes[j].materia[x]){
                        conta++;
                        resul+=" ["+this.listaTareaAux[i].titulo+"]";
                    }
                }
            }                
            estudiantesAux[conta-1]++;
            estudiantesAux2[conta-1]+="<br>"+"--->"+ estudiantes.estudiantes[j].nombre + resul;
          }
        
        for(let i=0;i<estudiantesAux.length;i++)
        {
            if(estudiantesAux[i]!=0)
            {
                //mostrar+="<br> Estudiantes con "+(i+1)+" tarea: "+estudiantesAux[i]+'<button >Clic</button>';
                mostrar+="<br><b>"+">"+"Estudiantes con "+(i+1)+" tarea: "+estudiantesAux[i]+"</b>"+ estudiantesAux2[i];
                this.mostrarNombreEstudientes(fecha+(i+1));
            }
        }
        return mostrar;
        
    }
    mostrarNombreEstudientes(idboton){
        let fecha=idboton.slice(0,10);
        let cantidadTareasBuscada=idboton.slice(10,idboton.length);
        let nombres="";
        let resulListaTareas=this.getMateriasMismaFecha(fecha);

        for(let j=0;j<estudiantes.estudiantes.length;j++){
            let cantidadTareasEstudiante=0;
            for(let x=0;x<estudiantes.estudiantes[j].materia.length;x++){
                for(let i = 0;i<resulListaTareas.length;i++){
                    if(resulListaTareas[i].materia == estudiantes.estudiantes[j].materia[x]){
                        cantidadTareasEstudiante++;
                    }
                }
            }                
            if(cantidadTareasEstudiante==cantidadTareasBuscada){
                nombres+=estudiantes.estudiantes[j].nombre+" ";
            }
          }

        console.log(nombres);    
    }
    getMateriasMismaFecha(fecha){
        let resulListaTareas=[];
        for(let i = 0;i<this.listaTareas.length;i++){
            if(fecha== this.listaTareas[i].fecha.toISOString().slice(0, -14))
            {
                resulListaTareas.push(this.listaTareas[i]);
            }
        }
        return resulListaTareas;
    }
    mostrarlista(){
        let mostrar="";
        let fechaaux="";
        let conta=0,numAlum=0;
        let tam= this.listaTareas.length;
        for(let i = 0;i<this.listaTareas.length;i++){
            for(let j=0;j<estudiantes.estudiantes.length;j++){
              for(let x=0;x<estudiantes.estudiantes[j].materia.length;x++){
                if(this.listaTareas[i].materia == estudiantes.estudiantes[j].materia[x]){
                  conta++;
                }
              }                
            }
            if(fechaaux==this.listaTareas[i].fecha.toISOString().slice(0, -14)){
                mostrar+= "<br> Materia: " + this.listaTareas[i].materia + " Tarea: " + this.listaTareas[i].titulo +"("+ conta +")";
            }else{
                mostrar+= '<br><b>FECHA:' + this.listaTareas[i].fecha.toISOString().slice(0, -14)+"</b>" +
                "<br> Materia: " + this.listaTareas[i].materia    + " Tarea: " + this.listaTareas[i].titulo +"("+ conta +")";
                fechaaux=this.listaTareas[i].fecha.toISOString().slice(0, -14);
            }
            conta=0;

            if(i==tam-1)
            {
                mostrar += this.agregarAux(this.listaTareas[i].fecha.toISOString().slice(0, -14));
            }
            else 
            {
                if(this.listaTareas[i].fecha.toISOString().slice(0, -14)!=this.listaTareas[i+1].fecha.toISOString().slice(0, -14)&& i < this.listaTareas.length)
                {
                    mostrar += this.agregarAux(this.listaTareas[i].fecha.toISOString().slice(0, -14));
                }    
            }
                
        }
        //this.agregarAlumnoTarea();
        return mostrar;
    }

    mostrarDetalle(tarea){
        const detalle="<br>Materia:"+tarea.materia+"<br>Tarea:"+tarea.titulo+"<br>Descripcion:"+tarea.descripcion+"<br>Fecha:"+tarea.fecha.toISOString().slice(0, -14)+"<br>Tiempo Estimado(dias):"+tarea.tiempoEstimado+"<br>Etiqueta:"+tarea.etiqueta;
        return detalle;
    }

    buscarTarea(titulo){
        for(let i = 0;i<this.listaTareas.length;i++){
            if(this.listaTareas[i].titulo==titulo){
                return this.listaTareas[i];
            }
        }
    }
    eliminarTarea(titulo){
        let nuevaListaTareas = [];
        for(let i = 0;i<this.listaTareas.length;i++){
            if(this.listaTareas[i].titulo!=titulo){
                nuevaListaTareas.push(this.listaTareas[i]);
            }
        }
        this.listaTareas=nuevaListaTareas;
    }

}
export default Tareas;