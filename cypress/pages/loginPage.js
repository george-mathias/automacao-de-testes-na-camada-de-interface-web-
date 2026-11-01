class LoginPage {
    // login
    get loginEmailInput() { return cy.get('[data-qa="login-email"]') }
    get loginPasswordInput() { return cy.get('[data-qa="login-password"]') }
    get loginButton() { return cy.get('[data-qa="login-button"]') }

    // new user signup form
    get signupNameInput() { return cy.get('input[data-qa="signup-name"]') }
    get signupEmailInput() { return cy.get('[data-qa="signup-email"]') }
    get signupButton() { return cy.get('[data-qa="signup-button"]') }


    go() {
        cy.visit('/login')
        cy.contains('New User Signup!').should('exist')
        cy.contains('Login').should('exist')
    }

    login(email, password) {
        this.loginEmailInput.should('be.visible').type(email)
        this.loginPasswordInput.should('be.visible').type(password)
        this.loginButton.should('be.visible').click()
    }

    registerUser(name, email) {
        this.signupNameInput.should('be.visible').type(name)
        this.signupEmailInput.should('be.visible').type(email)
        this.signupButton.should('be.visible').click()
    }
}

export default new LoginPage()