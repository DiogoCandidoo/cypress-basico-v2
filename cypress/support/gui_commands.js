Cypress.Commands.add(
  "fillMandatoryFieldsAndSubmit",
  (name, lastName, email, description) => {
    cy.get("input[id=firstName]").click().type(name);
    cy.get("input[id=lastName]").click().type(lastName);
    cy.get("input[id=email]").click().type(email);
    cy.get("textarea[id=open-text-area]").click().type(description);
  }
);
