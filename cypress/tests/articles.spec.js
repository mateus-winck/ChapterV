/// <reference types="cypress"  />

import articles from '../support/pages/articles'

describe('Criar Artigos', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Cadastrar Artigo com sucesso', () => {
    articles.acessarOFormulario()

    articles.preencherFormulario()

    articles.submeterFormulario()

    articles.validarFormulario()
  })
})

/// AAA -> Arrange, Act, Assert
/// Preparar, Executar/Agir, Validar
