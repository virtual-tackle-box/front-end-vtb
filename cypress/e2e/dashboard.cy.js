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
      .get('[data-testid="fa-icon-map"]')
      .should('exist');
    cy.get('[data-testid="map"]').should('exist').and('include.text', 'map');
    cy.get('[data-testid="fa-icon-book"]').should('exist');
    cy.get('[data-testid="book"]').should('exist').and('include.text', 'book');
    cy.get('[data-testid="add-button"]').should('exist').click();

    cy.get('[data-testid="fish-fins-icon"]')
      .should('exist')
      .get('[data-testid="lure-icon"]')
      .should('exist');

    // .each(($iconContainer, index) => {
    //   // Assert each icon is visible
    //   cy.wrap($iconContainer)
    //     .find('[data-testid^="fa-icon"]')
    //     .should('be.visible');

    //   // Assert each text is visible
    //   cy.wrap($iconContainer)
    //     .find('[data-testid="icon-text"]')
    //     .should('be.visible');

    //   // Assert each text contains the correct text
    //   cy.wrap($iconContainer)
    //     .find('[data-testid^=icon-text]')
    //     .should('have.text', ['Map', 'Add', 'Logbook'][index]);
    // });
  });
});
