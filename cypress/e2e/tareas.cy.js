describe("cambiar paginas", () => {
    it("deberia cambiar a la pagina de docentes al hacer clicl en el boton docente", () => {
    cy.visit('/docente.html');
    cy.get("#pagDocente").should("contain", "Docente");
    });
    it("deberia cambiar a la pagina de estudiantes al hacer clicl en el boton estudiante", () => {
    cy.visit('/estudiante.html');
    cy.get("#pagEstudiante").should("contain", "Estudiante");
    });
});

describe("manejador de tareas", () => {
    it("deberia agregar mas de una tarea", () => {
        cy.visit('/docente.html');
        cy.get("#nom-materia").type("SIS-131-ARQUITECTURA DE COMPUTADORAS");
        cy.get("#nom-tarea").type("prueba tarea");
        cy.get("#descripcion").type("realiza tu tarea");
        cy.get("#fech-tarea").type("2022-11-20");
        cy.get("#tarea-button").click();

        cy.get("#nom-materia").type("SIS-131-ARQUITECTURA DE COMPUTADORAS");
        cy.get("#nom-tarea").clear().type("prueba tarea");
        cy.get("#descripcion").clear().type("realiza tu tarea");
        cy.get("#fech-tarea").type("2022-11-20");
        cy.get("#tarea-button").click();
        cy.get("#resultado-div").each(($ele) => {
            cy.log($ele.text());
        });
        //Fecha:2022-11-20 Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea
        //Fecha:2022-11-20 Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea ------------- (6) Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea ------------- (6)
        cy.get("#resultado-div").should("contain", "Fecha:2022-11-20 Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea(15) Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea(15) Estudiantes con 2 tarea: 15");
         
    });
});

describe("buscador de tareas", () => {
    it("deberia buscar una tarea", () => {
    cy.visit('/docente.html');
    
    cy.get("#nom-materia").type("SIS-131-ARQUITECTURA DE COMPUTADORAS");
    cy.get("#nom-tarea").type("tarea 5");
    cy.get("#descripcion").type("realiza tu tarea");
    cy.get("#fech-tarea").type("2022-11-20");
    cy.get("#tarea-button").click();
    
    cy.get("#buscar-tarea").type("tarea 5");
    cy.get("#buscar-button").click();

    cy.get("#encontrado-div").should("contain", "Materia: ARQUITECTURA DE COMPUTADORAS Tarea: tarea 5");
    });   
});

describe("ver detalles de tareas", () => {
    it("deberia mostrar el detalle de una tarea", () => {
    cy.visit('/docente.html');
    
    cy.get("#nom-materia").type("SIS-131-ARQUITECTURA DE COMPUTADORAS");
    cy.get("#nom-tarea").type("tarea 5");
    cy.get("#descripcion").type("realiza");
    cy.get("#fech-tarea").type("2022-11-20");
    cy.get("#tarea-button").click();
    
    cy.get("#buscar-tarea").type("tarea 5");
    cy.get("#buscar-button").click();

    cy.get("#detalle-button").click();

    cy.get("#detalle-div").should("contain","Materia:ARQUITECTURA DE COMPUTADORASTarea:tarea 5Descripcion:realizaFecha:2022-11-20");
    });   
});
describe("agrupar lista por fechas", () => {
    it("deberia agrupar por fecha", () => {
        cy.visit('/docente.html');
        cy.get("#nom-materia").type("SIS-131-ARQUITECTURA DE COMPUTADORAS");
        cy.get("#nom-tarea").type("prueba tarea");
        cy.get("#descripcion").type("realiza tu tarea");
        cy.get("#fech-tarea").type("2022-11-20");
        cy.get("#tarea-button").click();

        cy.get("#nom-materia").type("SIS-131-ARQUITECTURA DE COMPUTADORAS");
        cy.get("#nom-tarea").clear().type("prueba tarea");
        cy.get("#descripcion").clear().type("realiza tu tarea");
        cy.get("#fech-tarea").type("2022-11-21");
        cy.get("#tarea-button").click();

        cy.get("#resultado-div").each(($ele) => {
            cy.log($ele.text());
         });
        //Fecha:2022-11-20 Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea Fecha:2022-11-21 Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea
        //Fecha:2022-11-20 Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea ------------- (6) Fecha:2022-11-21 Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea ------------- (6)
        cy.get("#resultado-div").should("contain", "Fecha:2022-11-20 Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea(15) Estudiantes con 1 tarea: 15 Fecha:2022-11-21 Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea(15) Estudiantes con 1 tarea: 15");
    }); 
});
