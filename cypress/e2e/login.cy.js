describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006');
  });
  it('Checks for login components and functionality', () => {
    cy.get('[data-testID="email-input"]')
      .should('exist')
      .as('email')
      .type('Banjamin')
      .get('@email')
      .should('have.value', 'Banjamin');
    cy.get('[data-testID="password-input"]')
      .should('exist')
      .as('password')
      .type('password')
      .get('@password')
      .should('have.value', 'password');
    cy.get('[data-testID="login-button"]').should('exist').click();
  });

  it('Should not allow login if either field is not entered', () => {
    cy.get('[data-testID="email-input"]')
      .should('exist')
      .as('email')
      .type('Banjamin')
      .get('@email')
      .should('have.value', 'Banjamin');
    cy.get('[data-testID="login-button"]').should('exist').click();
    cy.get('@email').should('exist');
    cy.get('[data-testID="password-input"]').should('exist');
    cy.get('[data-testID="login-button"]').should('exist');
    cy.get('@email').clear();
    cy.get('[data-testID="password-input"]')
      .should('exist')
      .as('password')
      .type('password')
      .get('@password')
      .should('have.value', 'password');
    cy.get('[data-testID="login-button"]').should('exist').click();
    cy.get('@email').should('exist');
    cy.get('[data-testID="password-input"]').should('exist');
    cy.get('[data-testID="login-button"]').should('exist');
  });
});
