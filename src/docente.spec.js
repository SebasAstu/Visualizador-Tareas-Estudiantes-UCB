import Docente from "./docente.js";

describe("Crear Tarea", () => {

    let docente;
    beforeEach(()=> {
    docente = new Docente});

  it("deberia crear una tarea", () => {
    docente.crearTarea("SIS-121 Sistemas de informacion I","diagrama de clases","crea un diagrama de clases segun lo descripcion","10/10/2022")
    expect(docente.tareas[0].titulo).toEqual("diagrama de clases");
  });
});
