describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://jannekekornet.com')
  })

  it('Find finds a tile and follows the link', () => {
    cy.visit('https://jannekekornet.com')
    cy.get('a[title="Krap en Klei"]').click()
    cy.title().should('include', 'Krap en Klei – Historisch rood uit de Zeeuwse bodem – Janneke Kornet')
  })
})