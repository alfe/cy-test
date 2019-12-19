/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://future-architect.github.io/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // ページ内に `フューチャー開発者ブログ` が表示されているか確認
    cy.contains('フューチャー開発者ブログ')

    // ページ内に `logo-img`をクラスに持つimgタグが表示されているか確認
    cy.get('img.logo-img')

    // `.blog-sidebar`(サイドバーのクラス)から `Culture`を探してクリック
    cy.get('.blog-sidebar').contains(`Culture`).click()
  })
})
