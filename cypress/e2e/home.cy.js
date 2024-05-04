describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000/');
    cy.wait(200);
  })


  it('el titulo de la pagina contenga el texto indicado', () => {
    cy.getByData("hero-heading").contains("Testing Next.js Applications with Cypress");
  })
  it('verificamos las características de los cursos', () => {
    cy.get("dt").eq(0).contains('4 Courses');
    cy.get("dt").eq(1).contains('25+ Lessons');
    cy.get("dt").eq(2).contains('Free and Open Source');
    cy.wait(500);
  })


})