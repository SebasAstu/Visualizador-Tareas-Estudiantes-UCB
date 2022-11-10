import Tarea from "../src/tarea.js";
import Tareas from './listaTareas.js'

const form = document.querySelector("#tareas-form");
const nombreMateria = document.querySelector("#nom-materia");
const nombreTarea = document.querySelector("#nom-tarea");
const descripcionTarea = document.querySelector("#descripcion");
const fechaTarea = document.querySelector("#fech-tarea");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();      
    const nomM = nombreMateria.value;
    const nomT = nombreTarea.value;
    const descrip = descripcionTarea.value;
    const fech = fechaTarea.value;  
    const tar = new Tarea(nomM,nomT,descrip,fech);
    const lista = new Tareas();
    lista.agregarTarea(tar);    
    div.innerHTML = div.innerHTML + lista.mostrarlista();
});