import Docente from "./docente.js";

describe("Crear Tarea", () => {

    let docente;
    beforeEach(()=> {
    docente = new Docente});

  it("deberia crear una tarea", () => {
    docente.crearTarea("SIS-121 Sistemas de informacion I","diagrama de clases","crea un diagrama de clases segun lo descripcion","10/10/2022",1)
    expect(docente.tareas[0].titulo).toEqual("diagrama de clases");
  });

  it("deberia mostrar id equivalente a 2", () => {
    docente.crearTarea("SIS-121 Sistemas de informacion I","diagrama","crea un diagrama de clases segun lo descripcion","10/10/2022",1)
    docente.crearTarea("SIS-121 Sistemas de informacion I","titulo2","crea un diagrama de clases segun lo descripcion","10/10/2022",2)
    expect(docente.tareas[0].titulo).toEqual("diagrama");
    expect(docente.tareas[1].titulo).toEqual("titulo2");
  });
});
