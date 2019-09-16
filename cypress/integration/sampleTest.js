describe('Test Visit', function() {
  it('Visits the Demo', function() {
    cy.visit('https://inspiring-jackson-ffd3a8.netlify.com')

  })
})

describe('Test Visit Elements', function() {
  it('Checks elements', function() {
    cy.contains("Sazerac").click()

    cy.url('include', '/sazerac')

  })
})
