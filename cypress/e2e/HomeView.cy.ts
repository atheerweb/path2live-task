// https://on.cypress.io/api

describe('HomeView', () => {
  it('visits the app root url', () => {
    cy.visit('/')
  })
  it('it has proper title', () => {
    cy.visit('/')
    cy.contains('h1', 'Path2Live Analytics')
  })
  it('it has sales card', () => {
    cy.visit('/')
    cy.contains('sales')
  })
  it('it has orders card', () => {
    cy.visit('/')
    cy.contains('orders')
  })
  it('it has customers card', () => {
    cy.visit('/')
    cy.contains('customers')
  })
})
