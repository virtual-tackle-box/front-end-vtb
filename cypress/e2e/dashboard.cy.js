describe('Dashboard', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006');
    cy.get('[data-testid="userName-input"]').type('Josh');
    cy.get('[data-testid="password-input"]').type('PW');
    cy.get('[data-testid="login-button"]').click();
    cy.get('[data-testid="dashboard-container"]').as('dashboardContainer');
  });

  it('should check icons and text in Dashboard', () => {
    // Select the dashboard container
    cy.get('@dashboardContainer')
      .should('be.visible')
      .find('[data-testid^="dashboard-icon"]')
      .each(($iconContainer, index) => {
        // Assert each icon is visible
        cy.wrap($iconContainer)
          .find('[data-testid^="fa-icon"]')
          .should('be.visible');

        // Assert each text is visible
        cy.wrap($iconContainer)
          .find('[data-testid="icon-text"]')
          .should('be.visible');

        // Assert each text contains the correct text
        cy.wrap($iconContainer)
          .find('[data-testid^=icon-text]')
          .should('have.text', ['Map', 'Add', 'Logbook'][index]);
      });
  });
});
