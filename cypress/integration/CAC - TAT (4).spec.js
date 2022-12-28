/// <reference types="Cypress" />



describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it('seleciona um arquivo da pasta fixtures', () => {
    cy.get('input[type=file]').selectFile('cypress/fixtures/example.json')
    .then(input => {
        expect(input[0].files[0].name).to.equal('example.json') //É esperado que o nome, do primeiro arquivo, do primeiro input do tipo passado anteriormente seja igual a example.json
    })
  })

  it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('input[type=file]').selectFile('cypress/fixtures/example.json', {action: 'drag-drop'} )
    .then(input => {
        expect(input[0].files[0].name).to.equal('example.json') //É esperado que o nome, do primeiro arquivo, do primeiro input do tipo passado anteriormente seja igual a example.json
    })
  })

  it.only('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture('example').as('sampleArchive') //fixture pega um arquivo de dentro da pasta fixtures e .as passa um nome para esse arquivo
    cy.get('input[type=file]').selectFile('@sampleArchive')
    .then(input => {
        expect(input[0].files[0].name).to.equal('example') //É esperado que o nome, do primeiro arquivo, do primeiro input do tipo passado anteriormente seja igual a example.json
    })
  })
});
