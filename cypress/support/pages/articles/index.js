const el = require('./elements').ELEMENTS

const ArticleTitle = 'testando com cypress' + new Date().getTime()

class Articles {
  acessarOFormulario () {
    cy.contains(el.linkNovoArtigo).click()
  }

  preencherFormulario () {
    cy.get(el.inputTitle).type(ArticleTitle)
    cy.get(el.inputDescription).type('Tentativa de teste')
    cy.get(el.inputArticleText).type('Estou tentando testar')
    cy.get(el.inputArticleTag).type('#test')
  }

  submeterFormulario () {
    cy.get(el.submitButton).click()
  }

  validarFormulario () {
    cy.get(el.ArticleTitle).should('be.visible')
    cy.get(el.ArticleTitle).should('contain', ArticleTitle)
  }
}

export default new Articles()
