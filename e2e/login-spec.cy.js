describe('sign-in', () => {
    it('navigates', () => {
      cy.visit('/')
      cy.get('.index-guest-button-form > .index-guest-button').click({force: true})
      cy.get('.authentication-intro-login').click({force: true})
      cy.get('#username').type('pneumaoutsourcing')
      cy.get('#password').type('Pneuma@test123')
      cy.get('#login').click()
    })
  })


