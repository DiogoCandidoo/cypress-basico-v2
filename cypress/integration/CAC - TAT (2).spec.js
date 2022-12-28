/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it('seleciona um produto (YouTube) por seu texto' , () => {
    cy.get('select[id=product]').select('YouTube')
    cy.get('select[id=product]').should('have.value', 'youtube')
  })

  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('select[id=product]').select('mentoria')
    cy.get('select[id=product]').should('have.value', 'mentoria')
  })

  it.only('seleciona um produto (Blog) por seu índice', () => {
    cy.get('select[id=product]').select(1)
    cy.get('select[id=product]').should('have.value', 'blog')
  })
});
