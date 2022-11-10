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

  
    
  });