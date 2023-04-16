declare namespace Cypress {
    interface Chainable {
  
      /**
       * faz o login na aplicação
       * @example cy.login() 
       */
      login(): void
  
      /**
       * busca o token da aplicação
       * @example cy.token() 
       */
  
      token(): void
  
    }
  }