// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginViaUI', user => {
  cy.visit('http://localhost:19006');
  cy.get('[data-testid="userName-input"]').type(user.name);
  cy.get('[data-testid="password-input"]').type(user.password);
  cy.get('[data-testid="login-button"]').click();
});

Cypress.Commands.add('getBySel', selector => {
  return cy.get(`[data-testid="${selector}"]`);
});

Cypress.Commands.add('testPlaceholder', (selector, placeholder) => {
  return cy
    .get(`[data-testid="${selector}"`)
    .should('have.attr', 'Placeholder', `${placeholder}`);
});
