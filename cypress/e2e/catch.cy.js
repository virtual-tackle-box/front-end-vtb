describe('Add Catch Form', () => {
  beforeEach(() => {
    cy.loginViaUI({ name: 'josh', password: '$ecret' });
    cy.getBySel('dashboard-container')
      .find('[data-testid="add-button"]')
      .click();
    cy.getBySel('fish-fins-icon').click();
  });

  it('Contains form header', () => {
    cy.contains('ADD CATCH');
    cy.contains('Cancel');
  });

  it('Contains all subform headers', () => {
    cy.getBySel('spot-header').should('include.text', 'Fishing Spot');
    cy.getBySel('fish-header').should('include.text', 'Fish Details');
    cy.getBySel('photo-header').should(
      'include.text',
      'Select Photo (optional)'
    );
    cy.getBySel('lure-header').should('include.text', 'Lure Details');
  });

  it('Form inputs contain placeholder text', () => {
    cy.testPlaceholder('spot-input', 'i.e. Top Secret Spot #2');

    cy.testPlaceholder('species-input', 'i.e. Largemouth Bass');
    cy.testPlaceholder('weight-input', 'lb');
    cy.testPlaceholder('length-input', 'in');

    cy.testPlaceholder('lure-input', 'i.e. Topwater Popper');
  });

  it('Form inputs update with user keyboard input', () => {
    cy.checkFormInputValue('spot-input', 'Mud Lake');

    cy.checkFormInputValue('species-input', 'Northern Pike');
    cy.checkFormInputValue('weight-input', '8.5');
    cy.checkFormInputValue('length-input', '27');

    cy.checkFormInputValue('lure-input', 'Swimbait');
  });

  it('Contains camera and gallery buttons', () => {
    cy.getBySel('camera-icon-button').should('be.visible');
    cy.getBySel('gallery-button').should('be.visible');
  });

  it('Contains the Submit button', () => {
    cy.getBySel('submit-button').should('be.visible')
  });
});
