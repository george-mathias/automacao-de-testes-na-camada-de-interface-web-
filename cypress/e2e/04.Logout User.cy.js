import loginPage from '../pages/LoginPage.js'
import { obterHoraFormatada, registerUser } from '../helpers/helpers.js'

describe('/login', () => {

    const fullName = 'Xúlio of Lime'
    const dinamicEmail = `${obterHoraFormatada()}@xuliooflime.com`

    before(function () {

        loginPage.go()
        loginPage.registerUser(fullName, dinamicEmail)

        cy.fixture('01.register.json').then((dadosCarregados) => {
            registerUser(dadosCarregados)
        })

        cy.get('a[href="/logout"]').click()
    })

    it('Logout user', function () {

        // act
        loginPage.login(dinamicEmail, '123456')
        cy.contains('Logged in as Xúlio of Lime')

        // assert
        cy.get('a[href="/logout"]').click()
        cy.contains('Full-Fledged practice website for Automation Engineers')

    })
}) // test ok!