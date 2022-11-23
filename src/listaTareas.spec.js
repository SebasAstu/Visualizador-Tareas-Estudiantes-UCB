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
        const resultado1 = new Tarea("BASES DE DATOS II","Mongo db","llenar base de datos","12-04-2022");
        tareas.agregarTarea(resultado1)
        const resultado2 = new Tarea("BASES DE DATOS I","Mongo db","llenar base de datos","2022-12-05");
        tareas.agregarTarea(resultado2)
        expect(tareas.mostrarlista()).toEqual("<br> Fecha:2022-12-04<br> Materia: BASES DE DATOS II Tarea: Mongo db(10)<br> Estudiantes con 1 tarea: 10<br> Fecha:2022-12-05<br> Materia: BASES DE DATOS I Tarea: Mongo db(9)<br> Estudiantes con 1 tarea: 9");
        
      });

      it("deberia agregar mas de dos tareas", () => {
        const resultado1 = new Tarea("BASES DE DATOS II","Mongo db","llenar base de datos","12-04-2022");
        tareas.agregarTarea(resultado1)
        const resultado2 = new Tarea("BASES DE DATOS I","Mongo db","llenar base de datos","12-04-2022");
        tareas.agregarTarea(resultado2)
        const resultado3 = new Tarea("ARQUITECTURA DE SOFTWARE","Mongo db","llenar base de datos","12-04-2022");
        tareas.agregarTarea(resultado3)
        expect(tareas.mostrarlista()).toEqual("<br> Fecha:2022-12-04<br> Materia: BASES DE DATOS II Tarea: Mongo db(10)<br> Materia: BASES DE DATOS I Tarea: Mongo db(9)<br> Materia: ARQUITECTURA DE SOFTWARE Tarea: Mongo db(20)<br> Estudiantes con 1 tarea: 1<br> Estudiantes con 2 tarea: 19");        
      });
    
      it("deberia buscar una tarea", () => {
        const resultado1 = new Tarea("BASES DE DATOS II","Mongo db","llenar base de datos","12-04-2022");
        tareas.agregarTarea(resultado1)
        const resultado2 = new Tarea("BASES DE DATOS I","relaciones","llenar base de datos","12-04-2022");
        tareas.agregarTarea(resultado2)
        const resultado3 = new Tarea("ARQUITECTURA DE SOFTWARE","nosql","llenar base de datos","12-04-2022");
        tareas.agregarTarea(resultado3)
        const busqueda=tareas.buscarTarea("nosql");
        expect(busqueda).toEqual(resultado3);
      });

      it("deberia ver detalle de una tarea", () => {
        const resultado1 = new Tarea("BASES DE DATOS II","Mongo db","llenar base de datos","12-04-2022");
        tareas.agregarTarea(resultado1)
        const busqueda=tareas.buscarTarea("Mongo db");
        const detalle=tareas.mostrarDetalle(busqueda);
        expect(detalle).toEqual("Materia:BASES DE DATOS IITarea:Mongo dbDescripcion:llenar base de datosFecha:2022-12-04");
      });
      it("deberia mostrar la lista de tareas en orden", () => {
        const resultado1 = new Tarea("BASES DE DATOS II","Mongo db","llenar base de datos","2022-04-10");
        tareas.agregarTarea(resultado1)
        const resultado2 = new Tarea("BASES DE DATOS I","Mongo db","llenar base de datos","2022-04-15");
        tareas.agregarTarea(resultado2)
        const resultado3 = new Tarea("ARQUITECTURA DE SOFTWARE","Mongo db","llenar base de datos","2022-04-12");
        tareas.agregarTarea(resultado3)
        expect(tareas.mostrarlista()).toEqual("<br> Fecha:2022-04-10<br> Materia: BASES DE DATOS II Tarea: Mongo db(10)<br> Estudiantes con 1 tarea: 10<br> Fecha:2022-04-12<br> Materia: ARQUITECTURA DE SOFTWARE Tarea: Mongo db(20)<br> Estudiantes con 1 tarea: 20<br> Fecha:2022-04-15<br> Materia: BASES DE DATOS I Tarea: Mongo db(9)<br> Estudiantes con 1 tarea: 9");

      });
      it("deberia agregar y eliminar una tarea", () => {
        const resultado1 = new Tarea("BASES DE DATOS II","UNO","llenar base de datos","2022-04-10");
        tareas.agregarTarea(resultado1)
        tareas.eliminarTarea("UNO");
        expect(tareas.mostrarlista()).toEqual("");
      });
      it("deberia agregar dos tareas y eliminar una", () => {
        const resultado1 = new Tarea("BASES DE DATOS II","UNO","llenar base de datos","2022-04-10");
        tareas.agregarTarea(resultado1)
        const resultado2 = new Tarea("BASES DE DATOS I","DOS","llenar base de datos","2022-04-15");
        tareas.agregarTarea(resultado2)
        tareas.eliminarTarea("UNO");
        expect(tareas.mostrarlista()).toEqual("<br> Fecha:2022-04-15<br> Materia: BASES DE DATOS I Tarea: DOS(9)<br> Estudiantes con 1 tarea: 9");
      });
      it("deberia agregar dos tareas y eliminarlas ambas", () => {
        const resultado1 = new Tarea("BASES DE DATOS II","UNO","llenar base de datos","2022-04-10");
        tareas.agregarTarea(resultado1)
        const resultado2 = new Tarea("BASES DE DATOS I","DOS","llenar base de datos","2022-04-15");
        tareas.agregarTarea(resultado2)
        tareas.eliminarTarea("UNO");
        tareas.eliminarTarea("DOS");
        expect(tareas.mostrarlista()).toEqual("");
      });
      it("deberia mostrar la lista agrupada por fechas", () => {
        const resultado1 = new Tarea("BASES DE DATOS II","Mongo db","llenar base de datos","2022-04-15");
        tareas.agregarTarea(resultado1)
        const resultado2 = new Tarea("BASES DE DATOS I","Mongo db","llenar base de datos","2022-04-15");
        tareas.agregarTarea(resultado2)
        const resultado3 = new Tarea("BASES DE DATOS I","Mongo db","llenar base de datos","2022-04-15");
        tareas.agregarTarea(resultado3)
        expect(tareas.mostrarlista()).toEqual("<br> Fecha:2022-04-15<br> Materia: BASES DE DATOS II Tarea: Mongo db(10)<br> Materia: BASES DE DATOS I Tarea: Mongo db(9)<br> Materia: BASES DE DATOS I Tarea: Mongo db(9)<br> Estudiantes con 1 tarea: 10<br> Estudiantes con 2 tarea: 9");
      });
  });