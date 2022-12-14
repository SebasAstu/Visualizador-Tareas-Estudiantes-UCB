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
        cy.get("#tiempoEstimado").type(2);
        cy.get("#tarea-button").click();

        cy.get("#nom-materia").type("SIS-131-ARQUITECTURA DE COMPUTADORAS");
        cy.get("#nom-tarea").clear().type("prueba tarea");
        cy.get("#descripcion").clear().type("realiza tu tarea");
        cy.get("#fech-tarea").type("2022-11-20");
        cy.get("#tiempoEstimado").type(2);
        cy.get("#tarea-button").click();
        cy.get("#resultado-div").each(($ele) => {
            cy.log($ele.text());
        });
        //Fecha:2022-11-20 Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea
        //Fecha:2022-11-20 Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea ------------- (6) Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea ------------- (6)
        cy.get("#resultado-div").should("contain", "FECHA:2022-11-20 Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea(15) Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea(15)>Estudiantes con 2 tarea: 15--->Jonathan: [prueba tarea] [prueba tarea]--->Martha: [prueba tarea] [prueba tarea]--->Pamela: [prueba tarea] [prueba tarea]--->Alberto: [prueba tarea] [prueba tarea]--->Monica: [prueba tarea] [prueba tarea]--->Pedro: [prueba tarea] [prueba tarea]--->Sandra: [prueba tarea] [prueba tarea]--->Maria: [prueba tarea] [prueba tarea]--->Alan: [prueba tarea] [prueba tarea]--->Mariana: [prueba tarea] [prueba tarea]--->Lucas: [prueba tarea] [prueba tarea]--->Sandro: [prueba tarea] [prueba tarea]--->Eliana: [prueba tarea] [prueba tarea]--->Pedro: [prueba tarea] [prueba tarea]--->Joaquin: [prueba tarea] [prueba tarea]");
         
    });
});

describe("buscador de tareas", () => {
    it("deberia buscar una tarea", () => {
    cy.visit('/docente.html');
    
    cy.get("#nom-materia").type("SIS-131-ARQUITECTURA DE COMPUTADORAS");
    cy.get("#nom-tarea").type("tarea 5");
    cy.get("#descripcion").type("realiza tu tarea");
    cy.get("#fech-tarea").type("2022-11-20");
    cy.get("#tiempoEstimado").type(2);
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
    cy.get("#tiempoEstimado").type(2);
    cy.get("#nom-etiqueta").type("EXAMEN");
    cy.get("#tarea-button").click();
    
    cy.get("#buscar-tarea").type("tarea 5");
    cy.get("#buscar-button").click();

    cy.get("#detalle-button").click();
    cy.get("#detalle-div").each(($ele) => {
        cy.log($ele.text());
    }); 
    cy.get("#detalle-div").should("contain","Materia:ARQUITECTURA DE COMPUTADORASTarea:tarea 5Descripcion:realizaFecha:2022-11-20Tiempo Estimado(dias):2Etiqueta:EXAMEN");
   });
});

describe("agrupar lista por fechas", () => {
    it("deberia agrupar por fecha", () => {
        cy.visit('/docente.html');
        cy.get("#nom-materia").type("SIS-131-ARQUITECTURA DE COMPUTADORAS");
        cy.get("#nom-tarea").type("prueba tarea");
        cy.get("#descripcion").type("realiza tu tarea");
        cy.get("#fech-tarea").type("2022-11-20");
        cy.get("#tiempoEstimado").type(2);
        cy.get("#tarea-button").click();

        cy.get("#nom-materia").type("SIS-131-ARQUITECTURA DE COMPUTADORAS");
        cy.get("#nom-tarea").clear().type("prueba tarea");
        cy.get("#descripcion").clear().type("realiza tu tarea");
        cy.get("#fech-tarea").type("2022-11-21");
        cy.get("#tiempoEstimado").type(2);
        cy.get("#tarea-button").click();

        cy.get("#resultado-div").each(($ele) => {
            cy.log($ele.text());
         });
        //Fecha:2022-11-20 Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea Fecha:2022-11-21 Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea
        //Fecha:2022-11-20 Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea ------------- (6) Fecha:2022-11-21 Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea ------------- (6)
        cy.get("#resultado-div").should("contain", "FECHA:2022-11-20 Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea(15)>Estudiantes con 1 tarea: 15--->Jonathan: [prueba tarea]--->Martha: [prueba tarea]--->Pamela: [prueba tarea]--->Alberto: [prueba tarea]--->Monica: [prueba tarea]--->Pedro: [prueba tarea]--->Sandra: [prueba tarea]--->Maria: [prueba tarea]--->Alan: [prueba tarea]--->Mariana: [prueba tarea]--->Lucas: [prueba tarea]--->Sandro: [prueba tarea]--->Eliana: [prueba tarea]--->Pedro: [prueba tarea]--->Joaquin: [prueba tarea]FECHA:2022-11-21 Materia: ARQUITECTURA DE COMPUTADORAS Tarea: prueba tarea(15)>Estudiantes con 1 tarea: 15--->Jonathan: [prueba tarea]--->Martha: [prueba tarea]--->Pamela: [prueba tarea]--->Alberto: [prueba tarea]--->Monica: [prueba tarea]--->Pedro: [prueba tarea]--->Sandra: [prueba tarea]--->Maria: [prueba tarea]--->Alan: [prueba tarea]--->Mariana: [prueba tarea]--->Lucas: [prueba tarea]--->Sandro: [prueba tarea]--->Eliana: [prueba tarea]--->Pedro: [prueba tarea]--->Joaquin: [prueba tarea]");
    }); 
});