/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });
  it("verifica o título da aplicação", () => {
    cy.title().should("eq", "Central de Atendimento ao Cliente TAT");
  });

  it("preenche os campos obrigatórios e envia o formulário", () => {
    cy.get("input[id=firstName]").click().type("Diogo");
    cy.get("input[id=lastName]").click().type("Oliveira");
    cy.get("input[id=email]").click().type("teste@teste.com.br");
    cy.get("textarea[id=open-text-area]")
      .click()
      .type(
        "Apenas testando para o exercício Apenas testando para o exercícioApenas testando para o exercícioApenas testando para o exercícioApenas testando para o exercícioApenas testando para o exercícioApenas testando para o exercícioApenas testando para o exercícioApenas testando para o exercícioApenas testando para o exercícioApenas testando para o exercícioApenas testando para o exercício",
        { delay: 0 }
      );
    cy.contains("button", "Enviar").click();
    cy.get("span[class=success").should("be.visible");
  });

  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", () => {
    cy.get("input[id=firstName]").click().type("Diogo");
    cy.get("input[id=lastName]").click().type("Oliveira");
    cy.get("input[id=email]").click().type("teste@teste");
    cy.get("textarea[id=open-text-area]")
      .click()
      .type(
        "Apenas testando para o exercício Apenas testando para o exercícioApenas testando para o exercícioApenas testando para o exercícioApenas testando para o exercícioApenas testando para o exercícioApenas testando para o exercícioApenas testando para o exercícioApenas testando para o exercícioApenas testando para o exercícioApenas testando para o exercícioApenas testando para o exercício",
        { delay: 0 }
      );
    cy.contains("button", "Enviar").click();
    cy.get(".error").should("be.visible");
  });

  it("input do telefone continua vazio ao digitar valor não numerico", () => {
    cy.get("input[id=phone]").click().type("Testando");
    cy.get("input[id=phone]").should("have.value", "");
  });

  it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", () => {
    cy.get("input[id=firstName]").click().type("Diogo");
    cy.get("input[id=lastName]").click().type("Oliveira");
    cy.get("input[id=email]").click().type("teste@teste");
    cy.get("input[id=phone-checkbox").check();
    cy.get("textarea[id=open-text-area]")
      .click()
      .type("Apenas testando para o exercício");
    cy.contains("button", "Enviar").click();
    cy.get(".error").should("be.visible");
  });

  it("preenche e limpa os campos nome, sobrenome, email e telefone", () => {
    cy.get("input[id=firstName]")
      .click()
      .type("Diogo")
      .should("have.value", "Diogo")
      .clear()
      .should("have.value", "");
    cy.get("input[id=lastName]")
      .click()
      .type("Oliveira")
      .should("have.value", "Oliveira")
      .clear()
      .should("have.value", "");
    cy.get("input[id=email]")
      .click()
      .type("teste@teste")
      .should("have.value", "teste@teste")
      .clear()
      .should("have.value", "");
    cy.get("input[id=phone]")
      .click()
      .type("123456789")
      .should("have.value", "123456789")
      .clear()
      .should("have.value", "");
  });

  it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", () => {
    cy.contains("button", "Enviar").click();
    cy.get(".error").should("be.visible");
  });

  it("envia o formuário com sucesso usando um comando customizado", () => {
    cy.fillMandatoryFieldsAndSubmit(
      "Diogo",
      "Candido",
      "teste@teste.com",
      "Apenas Testando"
    );
  });
});
