/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it("verifica que a política de privacidade abre em outra aba sem a necessidade de um clique", () => {
    cy.get("a").should("have.attr", "target", "_blank");
  });

  it("acessa a página da política de privacidade removendo o target e então clicando no link", () => {
    cy.get('#privacy a').invoke('removeAttr', 'target').click()
  });

  it.only('testa a página da política de privacidade de forma independente', () => {
    cy.get('#privacy a').invoke('removeAttr', 'target').click()
    cy.get('h1[id=title]').should('contain', 'CAC TAT - Política de privacidade')
    
  })
});
