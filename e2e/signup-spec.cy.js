describe('sign-up', () => {
  it('navigates', () => {
    cy.visit('/')
    cy.get('.index-guest-button-form > .index-guest-button').click({force: true})
    cy.get('.authentication-intro-component > .ui_v5-button-primary').click({force: true})
    cy.get('#registration_username').type('Abeebaba')
    cy.get('#registration_email').type('almahbuub@gmail.com')
    cy.get('#registration_password').type('P@ssw0rd)')
    cy.get('#registration_submit').click({force: true})
    cy.wait(3000)
    cy.get('.big-button').click()
    cy.get('#cf-chl-widget-ww6a1').check()
  })
})