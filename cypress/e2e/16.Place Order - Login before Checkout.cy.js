import loginPage from '../pages/LoginPage.js'
import { obterHoraFormatada, registerUser } from '../helpers/helpers.js'

describe('/login', () => {

    const fullName = 'Xúlio of Lime'
    const dinamicEmail = `${obterHoraFormatada()}@xuliooflime.com`

    beforeEach(function () {

        cy.visit('/')
        cy.contains('Full-Fledged practice website for Automation Engineers')

        loginPage.go()
        cy.contains('h2', 'Login to your account')

        loginPage.registerUser(fullName, dinamicEmail)

        cy.fixture('01.register.json').then((dadosCarregados) => {
            registerUser(dadosCarregados)
            this.dados = dadosCarregados
        })
        
        cy.get('a[href="/logout"]').click()
        
        loginPage.login(dinamicEmail, '123456')

    })

    it('register a new user', function () {

        // act
        cy.contains('Logged in as Xúlio of Lime')

        cy.contains('p', 'Blue Top')
            .parent('.productinfo')
            .find('.add-to-cart')
            .click()

        cy.contains('button', 'Continue Shopping')
            .should('be.visible')
            .click()


        cy.get('a[href="/view_cart"]')
            .should('be.visible')
            .first()
            .click()

        cy.contains('Proceed To Checkout')
            .should('be.visible')
            .click()

        cy.get('#address_delivery').within(() => {
            cy.contains(`${this.dados.title}. ${this.dados.firstName} ${this.dados.lastName}`).should('be.visible')
            cy.contains(this.dados.company).should('be.visible')
            cy.contains(this.dados.address).should('be.visible')
            cy.contains(this.dados.country).should('be.visible')
            cy.contains(this.dados.mobileNumber).should('be.visible')
        })

        cy.get('textarea[name="message"]')
            .should('be.visible')
            .type('my personal message')

        cy.get('a[href="/payment"]')
            .should('be.visible')
            .click()

        cy.get('input[data-qa="name-on-card"]')
            .should('be.visible')
            .type('Xúilo of Lime')

        cy.get('input[data-qa="card-number"]')
            .should('be.visible')
            .type('1234 5678 9012 3456')

        cy.get('input[data-qa="cvc"]')
            .should('be.visible')
            .type('123')

        cy.get('input[data-qa="expiry-month"]')
            .should('be.visible')
            .type('12')

        cy.get('input[data-qa="expiry-year"]')
            .should('be.visible')
            .type('2099')

        cy.get('button[id="submit"]')
            .should('be.visible')
            .click()

        // assert
        cy.contains('Your order has been placed successfully!')
            .should('be.visible')

        cy.get('a[href="/delete_account"]').click()
        cy.contains('Account Deleted!')

        cy.get('a[data-qa="continue-button"]').click()

    })
}) // test ok!