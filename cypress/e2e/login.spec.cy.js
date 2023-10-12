describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Checks for default text content', () => {
    cy.contains('Changed for testing purposes!').should('be.visible')
  })
})