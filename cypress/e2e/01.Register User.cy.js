import loginPage from '../pages/LoginPage.js'
import registerPage from '../pages/registerPage.js'
import { obterHoraFormatada } from '../helpers/helpers.js'

describe('/login', () => {

    before(function () {

        cy.fixture('01.register.json').then((dadosCarregados) => {
            this.dados = dadosCarregados
        })

        cy.visit('/')

        loginPage.go()
        cy.contains('h2', 'Login to your account')
            .should('be.visible')

        const dinamicEmail = `${obterHoraFormatada()}@xuliooflime.com`

        loginPage.registerUser('Xúlio of Lime', dinamicEmail)
        cy.contains('b', 'Enter Account Information')
            .should('be.visible')
    })

    it('register a new user', function () {

        registerPage.createNewUser(this.dados)

        cy.contains('b', 'Account Created!').should('be.visible')
        cy.get('[data-qa="continue-button"]').should('be.visible')

        cy.get('[data-qa="continue-button"]').click()
        cy.contains('Logged in as Xúlio of Lime')

        cy.get('a[href="/delete_account"]').click()
        cy.contains('Account Deleted!')
        
        cy.get('a[data-qa="continue-button"]').click()
    })
}) // test ok!