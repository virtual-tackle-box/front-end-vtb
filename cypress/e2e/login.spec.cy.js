describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006')
  })
  it('Checks for default text content', () => {
    cy.contains('Changed for testing purposes!').should('be.visible')
  })
})