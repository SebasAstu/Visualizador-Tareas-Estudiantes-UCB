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
        expect(tareas.mostrarlista()).toEqual("<br><b>FECHA:2022-12-04</b><br> Materia: BASES DE DATOS II Tarea: Mongo db(10)<br><b>>Estudiantes con 1 tarea: 10</b><br>--->Pamela: [Mongo db]<br>--->Alberto: [Mongo db]<br>--->Pedro: [Mongo db]<br>--->Sandra: [Mongo db]<br>--->Maria: [Mongo db]<br>--->Mariana: [Mongo db]<br>--->Lucas: [Mongo db]<br>--->Sandro: [Mongo db]<br>--->Eliana: [Mongo db]<br>--->Pedro: [Mongo db]<br><b>FECHA:2022-12-05</b><br> Materia: BASES DE DATOS I Tarea: Mongo db(9)<br><b>>Estudiantes con 1 tarea: 9</b><br>--->Jonathan: [Mongo db]<br>--->Monica: [Mongo db]<br>--->Samuel: [Mongo db]<br>--->Alan: [Mongo db]<br>--->Andres: [Mongo db]<br>--->Carlos: [Mongo db]<br>--->Alberto: [Mongo db]<br>--->Joaquin: [Mongo db]<br>--->Tereza: [Mongo db]");
        
      });

      it("deberia agregar mas de dos tareas", () => {
        const resultado1 = new Tarea("BASES DE DATOS II","Mongo db","llenar base de datos","12-04-2022");
        tareas.agregarTarea(resultado1)
        const resultado2 = new Tarea("BASES DE DATOS I","Mongo db","llenar base de datos","12-04-2022");
        tareas.agregarTarea(resultado2)
        const resultado3 = new Tarea("ARQUITECTURA DE SOFTWARE","Mongo db","llenar base de datos","12-04-2022");
        tareas.agregarTarea(resultado3)
        expect(tareas.mostrarlista()).toEqual("<br><b>FECHA:2022-12-04</b><br> Materia: BASES DE DATOS II Tarea: Mongo db(10)<br> Materia: BASES DE DATOS I Tarea: Mongo db(9)<br> Materia: ARQUITECTURA DE SOFTWARE Tarea: Mongo db(20)<br><b>>Estudiantes con 1 tarea: 1</b><br>--->Martha: [Mongo db]<br><b>>Estudiantes con 2 tarea: 19</b><br>--->Jonathan: [Mongo db] [Mongo db]<br>--->Pamela: [Mongo db] [Mongo db]<br>--->Alberto: [Mongo db] [Mongo db]<br>--->Monica: [Mongo db] [Mongo db]<br>--->Samuel: [Mongo db] [Mongo db]<br>--->Pedro: [Mongo db] [Mongo db]<br>--->Sandra: [Mongo db] [Mongo db]<br>--->Maria: [Mongo db] [Mongo db]<br>--->Alan: [Mongo db] [Mongo db]<br>--->Andres: [Mongo db] [Mongo db]<br>--->Mariana: [Mongo db] [Mongo db]<br>--->Lucas: [Mongo db] [Mongo db]<br>--->Sandro: [Mongo db] [Mongo db]<br>--->Carlos: [Mongo db] [Mongo db]<br>--->Eliana: [Mongo db] [Mongo db]<br>--->Pedro: [Mongo db] [Mongo db]<br>--->Alberto: [Mongo db] [Mongo db]<br>--->Joaquin: [Mongo db] [Mongo db]<br>--->Tereza: [Mongo db] [Mongo db]");        
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
        expect(tareas.mostrarlista()).toEqual("<br><b>FECHA:2022-04-10</b><br> Materia: BASES DE DATOS II Tarea: Mongo db(10)<br><b>>Estudiantes con 1 tarea: 10</b><br>--->Pamela: [Mongo db]<br>--->Alberto: [Mongo db]<br>--->Pedro: [Mongo db]<br>--->Sandra: [Mongo db]<br>--->Maria: [Mongo db]<br>--->Mariana: [Mongo db]<br>--->Lucas: [Mongo db]<br>--->Sandro: [Mongo db]<br>--->Eliana: [Mongo db]<br>--->Pedro: [Mongo db]<br><b>FECHA:2022-04-12</b><br> Materia: ARQUITECTURA DE SOFTWARE Tarea: Mongo db(20)<br><b>>Estudiantes con 1 tarea: 20</b><br>--->Jonathan: [Mongo db]<br>--->Martha: [Mongo db]<br>--->Pamela: [Mongo db]<br>--->Alberto: [Mongo db]<br>--->Monica: [Mongo db]<br>--->Samuel: [Mongo db]<br>--->Pedro: [Mongo db]<br>--->Sandra: [Mongo db]<br>--->Maria: [Mongo db]<br>--->Alan: [Mongo db]<br>--->Andres: [Mongo db]<br>--->Mariana: [Mongo db]<br>--->Lucas: [Mongo db]<br>--->Sandro: [Mongo db]<br>--->Carlos: [Mongo db]<br>--->Eliana: [Mongo db]<br>--->Pedro: [Mongo db]<br>--->Alberto: [Mongo db]<br>--->Joaquin: [Mongo db]<br>--->Tereza: [Mongo db]<br><b>FECHA:2022-04-15</b><br> Materia: BASES DE DATOS I Tarea: Mongo db(9)<br><b>>Estudiantes con 1 tarea: 9</b><br>--->Jonathan: [Mongo db]<br>--->Monica: [Mongo db]<br>--->Samuel: [Mongo db]<br>--->Alan: [Mongo db]<br>--->Andres: [Mongo db]<br>--->Carlos: [Mongo db]<br>--->Alberto: [Mongo db]<br>--->Joaquin: [Mongo db]<br>--->Tereza: [Mongo db]");

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
        expect(tareas.mostrarlista()).toEqual("<br><b>FECHA:2022-04-15</b><br> Materia: BASES DE DATOS I Tarea: DOS(9)<br><b>>Estudiantes con 1 tarea: 9</b><br>--->Jonathan: [DOS]<br>--->Monica: [DOS]<br>--->Samuel: [DOS]<br>--->Alan: [DOS]<br>--->Andres: [DOS]<br>--->Carlos: [DOS]<br>--->Alberto: [DOS]<br>--->Joaquin: [DOS]<br>--->Tereza: [DOS]");
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
        expect(tareas.mostrarlista()).toEqual("<br><b>FECHA:2022-04-15</b><br> Materia: BASES DE DATOS II Tarea: Mongo db(10)<br> Materia: BASES DE DATOS I Tarea: Mongo db(9)<br> Materia: BASES DE DATOS I Tarea: Mongo db(9)<br><b>>Estudiantes con 1 tarea: 10</b><br>--->Pamela: [Mongo db]<br>--->Alberto: [Mongo db]<br>--->Pedro: [Mongo db]<br>--->Sandra: [Mongo db]<br>--->Maria: [Mongo db]<br>--->Mariana: [Mongo db]<br>--->Lucas: [Mongo db]<br>--->Sandro: [Mongo db]<br>--->Eliana: [Mongo db]<br>--->Pedro: [Mongo db]<br><b>>Estudiantes con 2 tarea: 9</b><br>--->Jonathan: [Mongo db] [Mongo db]<br>--->Monica: [Mongo db] [Mongo db]<br>--->Samuel: [Mongo db] [Mongo db]<br>--->Alan: [Mongo db] [Mongo db]<br>--->Andres: [Mongo db] [Mongo db]<br>--->Carlos: [Mongo db] [Mongo db]<br>--->Alberto: [Mongo db] [Mongo db]<br>--->Joaquin: [Mongo db] [Mongo db]<br>--->Tereza: [Mongo db] [Mongo db]");
      });
      it("deberia mostrar los estudiantes que tienen una tarea", () => {
        const resultado1 = new Tarea("BASES DE DATOS II","Mongo db","llenar base de datos","2022-04-15");
        tareas.agregarTarea(resultado1)
        expect(tareas.mostrarlista()).toEqual("<br><b>FECHA:2022-04-15</b><br> Materia: BASES DE DATOS II Tarea: Mongo db(10)<br><b>>Estudiantes con 1 tarea: 10</b><br>--->Pamela: [Mongo db]<br>--->Alberto: [Mongo db]<br>--->Pedro: [Mongo db]<br>--->Sandra: [Mongo db]<br>--->Maria: [Mongo db]<br>--->Mariana: [Mongo db]<br>--->Lucas: [Mongo db]<br>--->Sandro: [Mongo db]<br>--->Eliana: [Mongo db]<br>--->Pedro: [Mongo db]");
      });
      it("deberia mostrar los estudiantes que tienen diferentes tarea", () => {
        const resultado1 = new Tarea("BASES DE DATOS II","Mongo db","llenar base de datos","2022-04-15");
        tareas.agregarTarea(resultado1)
        const resultado2 = new Tarea("BASES DE DATOS I","Mongo db","llenar base de datos","2022-04-15");
        tareas.agregarTarea(resultado2)
        expect(tareas.mostrarlista()).toEqual("<br><b>FECHA:2022-04-15</b><br> Materia: BASES DE DATOS II Tarea: Mongo db(10)<br> Materia: BASES DE DATOS I Tarea: Mongo db(9)<br><b>>Estudiantes con 1 tarea: 19</b><br>--->Jonathan: [Mongo db]<br>--->Pamela: [Mongo db]<br>--->Alberto: [Mongo db]<br>--->Monica: [Mongo db]<br>--->Samuel: [Mongo db]<br>--->Pedro: [Mongo db]<br>--->Sandra: [Mongo db]<br>--->Maria: [Mongo db]<br>--->Alan: [Mongo db]<br>--->Andres: [Mongo db]<br>--->Mariana: [Mongo db]<br>--->Lucas: [Mongo db]<br>--->Sandro: [Mongo db]<br>--->Carlos: [Mongo db]<br>--->Eliana: [Mongo db]<br>--->Pedro: [Mongo db]<br>--->Alberto: [Mongo db]<br>--->Joaquin: [Mongo db]<br>--->Tereza: [Mongo db]");
      });
  });