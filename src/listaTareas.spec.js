import Tareas from "./listaTareas.js"
import Tarea from "./tarea.js"

describe("manejador tarea", () => {

    let tareas;
    beforeEach(()=> {
    tareas = new Tareas
  });

    it("deberia crear una tarea", () => {
      const resultado = new Tarea("Bda2","Mongo db","llenar base de datos","12-04-2022");

      expect(resultado.materia).toEqual("Bda2");
    });

    it("deberia agregar mas de una tarea", () => {
        const resultado1 = new Tarea("Bda2","Mongo db","llenar base de datos","12-04-2022");
        tareas.agregarTarea(resultado1)
        const resultado2 = new Tarea("Bda1","Mongo db","llenar base de datos","12-04-2022");
        tareas.agregarTarea(resultado2)
        expect(tareas.mostrarlista()).toEqual("<br> Fecha:12-04-2022<br> Materia: Bda2 Tarea: Mongo db<br> Fecha:12-04-2022<br> Materia: Bda1 Tarea: Mongo db");
        
      });
    
  });