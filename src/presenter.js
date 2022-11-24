import Tarea from "../src/tarea.js";
import Tareas from './listaTareas.js'

const form = document.querySelector("#tareas-form");
const form2= document.querySelector("#detalle-form");

const nombreMateria = document.querySelector("#nom-materia");
const nombreTarea = document.querySelector("#nom-tarea");
const descripcionTarea = document.querySelector("#descripcion");
const fechaTarea = document.querySelector("#fech-tarea");
const tiempoEstimado = document.querySelector("#tiempoEstimado");
const buscarNomTarea=document.querySelector("#buscar-tarea")
const nomEtiqueta=document.querySelector("#nom-etiqueta");

const div = document.querySelector("#resultado-div");
const divBusqueda= document.querySelector("#encontrado-div");

const btnDetalle=document.querySelector("#detalle-button");
const btnEliminar=document.querySelector("#eliminar-button");
const divDet=document.querySelector("#detalle-div");

let lista2 = new Tareas();
let tareaDetalle=new Tarea();

form.addEventListener("submit", (event) => {
    event.preventDefault();      
    const nomM = nombreMateria.value;
    const nomT = nombreTarea.value;
    const descrip = descripcionTarea.value;
    const fech = fechaTarea.value;  
    const tiempoE =  tiempoEstimado.value;
    const etiqueta= nomEtiqueta.value;
    const tar = new Tarea(nomM,nomT,descrip,fech,tiempoE,etiqueta);
    
    lista2.agregarTarea(tar);
    div.innerHTML = lista2.mostrarlista();
});
form2.addEventListener("submit", (event) => {
    event.preventDefault();      
    const buscarT=buscarNomTarea.value;  
    const tareaEnc=lista2.buscarTarea(buscarT); 
    tareaDetalle=tareaEnc;

    divBusqueda.innerHTML = "<p>"+"Materia: " + tareaEnc.materia    + " Tarea: " + tareaEnc.titulo+ "</p>";
});
btnDetalle.addEventListener("click", (event) => {
    event.preventDefault();
    divDet.innerHTML = lista2.mostrarDetalle(tareaDetalle);      
});
btnEliminar.addEventListener("click", (event) => {
    event.preventDefault();
    lista2.eliminarTarea(buscarNomTarea.value);
    div.innerHTML = lista2.mostrarlista();
});