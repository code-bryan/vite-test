/// <reference types="cypress" />

context('Application', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Checking welcome test', () => {
    cy.get('h1').should('contain', 'Hi')
  });
})