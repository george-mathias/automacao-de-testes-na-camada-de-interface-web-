import loginPage from '../pages/LoginPage.js'

describe('home page', () => {

    before(function () {

        loginPage.go()
        cy.contains('h2', 'Login to your account')
            .should('be.visible')

    })
    it('check home page is on', function () {

        loginPage.login('contato@xuliooflime', '123456')
        cy.contains('Your email or password is incorrect!')
    })
}) // teste ok!