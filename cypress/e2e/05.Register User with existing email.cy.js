import loginPage from '../pages/LoginPage.js'
import { obterHoraFormatada, registerUser } from '../helpers/helpers.js'

describe('/login', () => {

    const fullName = 'Xúlio of Lime'
    const dinamicEmail = `${obterHoraFormatada()}@xuliooflime.com`

    beforeEach(function () {

        loginPage.go()
        loginPage.registerUser(fullName, dinamicEmail)

        cy.fixture('01.register.json').then((dadosCarregados) => {
            registerUser(dadosCarregados)
        })
        
        cy.get('a[href="/logout"]').click()
    })

    it('register a new user', function () {

        // act
        loginPage.registerUser(fullName, dinamicEmail)
        
        // assert
        cy.contains('Email Address already exist!')
    })
}) // test ok!