/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get("input[name=atendimento-tat][value=feedback]")
      .check()
      .should("have.value", "feedback");
  });

  it("marca cada tipo de atendimento", () => {
    cy.get("input[name=atendimento-tat][value=feedback]")
      .check()
      .should("be.checked");
    cy.get("input[name=atendimento-tat][value=elogio]")
      .check()
      .should("be.checked");
    cy.get("input[name=atendimento-tat][value=ajuda]")
      .check()
      .should("be.checked");
  });

  //outra forma de resolver o teste de cima
  it("marca cada tipo de atendimento", () => {
    cy.get("input[type=radio]").should("have.length", 3).each($radio => {
        cy.wrap($radio).check()
        cy.wrap($radio).should('be.checked')
    })
  });

  it.only('marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type=checkbox]').check().should('be.checked')
    cy.get('input[type=checkbox]').last().uncheck().should('not.be.checked')
  })
});
