describe("cambiar paginas", () => {
    it("deberia cambiar a la pagina de docentes al hacer clicl en el boton docente", () => {
    cy.visit('http://localhost:1234/docente.html');
    cy.get("#pagDocente").should("contain", "Docente");
    });
    it("deberia cambiar a la pagina de estudiantes al hacer clicl en el boton estudainte", () => {
    cy.visit('http://localhost:1234/estudiante.html');
    cy.get("#pagEstudiante").should("contain", "Estudiante");
    });
});