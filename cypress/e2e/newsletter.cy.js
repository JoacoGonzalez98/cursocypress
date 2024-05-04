describe("funcionalidad de newsletter", () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/');
        cy.wait(400);
    })

    it("permite al usuario a suscribirse al newsletter correctamente", ()=>{
        cy.getByData("email-input").type("joacog98@email.com")
        cy.getByData("submit-button").click();
        cy.getByData("success-message").should("exist").contains("joacog98@email.com")
    })
    it("no permite al usuario utilizar un mail invalido", ()=>{
        cy.getByData("email-input").type("joacog98")
        cy.getByData("submit-button").click();
        cy.getByData("success-message").should("not.exist");
    })

    it.only("usuario subscripto no puede volver a suscribirse", ()=>{
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click();
        cy.getByData("server-error-message").should("exist").contains("Error");
    })
    
})
