describe("cambiar paginas", () => {
    it("deberia cambiar a la pagina de docentes al hacer clicl en el boton docente", () => {
    cy.visit('http://localhost:1234/docente.html');
    cy.get("#pagDocente").should("contain", "Docente");
    });
    it("deberia cambiar a la pagina de estudiantes al hacer clicl en el boton estudiante", () => {
    cy.visit('http://localhost:1234/estudiante.html');
    cy.get("#pagEstudiante").should("contain", "Estudiante");
    });
});

describe("manejador de tareas", () => {
    it("deberia agregar una tarea", () => {
    cy.visit('http://127.0.0.1:5500/docente.html');
    cy.get("#nom-materia").type("SIS-131-ARQUITECTURA DE COMPUTADORAS");
    cy.get("#nom-tarea").type("prueba tarea");
    cy.get("#descripcion").type("realiza tu tarea");
    cy.get("#fech-tarea").type("2022-11-20");
    
    cy.get("#tarea-button").click();
    cy.get("#resultado-div").should("contain", "Fecha:2022-11-20 Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea");

    
    });

    it("deberia agregar mas de una tarea", () => {
        cy.visit('http://127.0.0.1:5500/docente.html');
        cy.get("#nom-materia").type("SIS-131-ARQUITECTURA DE COMPUTADORAS");
        cy.get("#nom-tarea").type("prueba tarea");
        cy.get("#descripcion").type("realiza tu tarea");
        cy.get("#fech-tarea").type("2022-11-20");
        cy.get("#tarea-button").click();

        cy.get("#nom-materia").type("SIS-131-ARQUITECTURA DE COMPUTADORAS");
        cy.get("#nom-tarea").type("prueba tarea");
        cy.get("#descripcion").type("realiza tu tarea");
        cy.get("#fech-tarea").type("2022-11-20");
        cy.get("#tarea-button").click();

        cy.get("#resultado-div").should("contain", "Fecha:2022-11-20 Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea Fecha:2022-11-20 Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea");
    });
});

describe("buscador de tareas", () => {
    it("deberia buscar una tarea", () => {
    cy.visit('http://127.0.0.1:5500/docente.html');
    
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


