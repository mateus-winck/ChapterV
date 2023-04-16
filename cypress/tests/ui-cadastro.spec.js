/// <reference types="cypress"  />

const Chance = require('chance')
const chance = new Chance()

describe('Cadastro', () => {
  it('Cadastro com sucesso', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    },
    {
      statusCode: 200,
      fixture: 'ui-cadastro.json'
    }).as('postUsers')

    cy.visit('register')
    cy.get('[placeholder="Username"]').type(chance.name({ nationality: 'en' }))
    cy.get('[placeholder="Email"]').type(chance.first({ nationality: 'it' }) + '@mail.com')
    cy.get('[placeholder="Password"]').type(chance.integer({ min: 111111, max: 999999 }))
    cy.get('button.btn-primary').click()

    cy.contains('Your Feed').should('be.visible')
  })

  it('Cadastro com erro de usuário já cadastrado', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'

    },
    {
      statusCode: 422,
      fixture: 'ui-cadastro-erro-user.json'
    }).as('postUsers')

    cy.visit('register')
    cy.get('[placeholder="Username"]').type(chance.name({ nationality: 'en' }))
    cy.get('[placeholder="Email"]').type(chance.first({ nationality: 'it' }) + '@mail.com')
    cy.get('[placeholder="Password"]').type(chance.integer({ min: 111111, max: 999999 }))
    cy.get('button.btn-primary').click()

    cy.get('div.ng-scope > .ng-binding').should('contain', 'username has already been taken')
  })

  it('Cadastro com erro de email já cadastrado', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'

    },
    {
      statusCode: 422,
      fixture: 'ui-cadastro-erro-mail.json'
    }).as('postUsers')

    cy.visit('register')
    cy.get('[placeholder="Username"]').type(chance.name({ nationality: 'en' }))
    cy.get('[placeholder="Email"]').type(chance.first({ nationality: 'it' }) + '@mail.com')
    cy.get('[placeholder="Password"]').type(chance.integer({ min: 111111, max: 999999 }))
    cy.get('button.btn-primary').click()

    cy.get('div.ng-scope > .ng-binding').should('contain', 'email has already been taken')
  })
})
