import registerPage from "../pages/registerPage.js"

function obterHoraFormatada() {
    return new Date().toLocaleTimeString('pt-BR', { hour12: false }).replace(/:/g, '');
}

function registerUser(dados) {

    registerPage.createNewUser(dados)

    cy.contains('b', 'Account Created!').should('be.visible')
    cy.get('[data-qa="continue-button"]').should('be.visible')

    cy.get('[data-qa="continue-button"]').click()
    cy.contains('Logged in as Xúlio of Lime')

    // cy.get('a[href="/logout"]').click()
}


module.exports = {
  obterHoraFormatada,
  registerUser
}