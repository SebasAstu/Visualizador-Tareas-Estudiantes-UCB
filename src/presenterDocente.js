import Docente from "./docente.js"

const formDocente = document.querySelector("#docente-form");
const nomMateria= document.querySelector("#nom-materia");
const titTarea= document.querySelector("#titulo-tarea");
const descTarea=document.querySelector("#descripcion-tarea");
const fechaTarea=document.querySelector("#fecha-tarea");

formDocente.addEventListener("submit", (event) => {
  event.preventDefault();   

  const nom = nomMateria.value;
  const titulo= titTarea.value;
  const descipcion=descTarea.value;
  const fecha=fechaTarea.value;

  let docente= new Docente(); 

  docente.crearTarea(nom,titulo,descipcion,fecha,1);
  



  //div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});