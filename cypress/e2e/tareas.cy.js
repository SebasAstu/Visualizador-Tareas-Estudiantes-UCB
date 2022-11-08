describe("cambiar paginas", () => {
    it("deberia cambiar a la pagina de docentes al hacer clicl en el boton", () => {
    cy.visit('http://127.0.0.1:5500/docente.html');
    cy.get("#pagDocente").should("contain", "Docente");
    });
});