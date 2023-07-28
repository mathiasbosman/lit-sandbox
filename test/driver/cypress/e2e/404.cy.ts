describe('404 page', () => {
  it('Page loads', () => {
    cy.visit('/404.html')
    cy.get('h1').should('contain.text', 'An error occurred')
    cy.get('p').should('contain.text', '404')
    cy.screenshot()
  })
})
