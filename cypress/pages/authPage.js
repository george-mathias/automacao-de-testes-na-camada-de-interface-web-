class AuthPage {
    // login
    get loginEmailInput() { return cy.get('[data-qa="login-email"]') }
    get loginPasswordInput() { return cy.get('[data-qa="login-password"]') }
    get loginButton() { return cy.get('[data-qa="login-button"]') }

    // new user signup form
    get signupNameInput() { return cy.get('input[data-qa="signup-name"]') }
    get signupEmailInput() { return cy.get('[data-qa="signup-email"]') }
    get signupButton() { return cy.get('[data-qa="signup-button"]') }

    // register user
    get titleRadioButton() { return cy.get('input[type="radio"]') }
    get signinPasswordInput() { return cy.get('[data-qa="password"]') }
    get birthDay() { return cy.get('[data-qa="days"]') }
    get birthMonth() { return cy.get('[data-qa="months"]') }
    get birthYear() { return cy.get('[data-qa="years"]') }
    get firstNameInput() { return cy.get('[data-qa="first_name"]') }
    get lastNameInput() { return cy.get('[data-qa="last_name"]') }
    get companyInput() { return cy.get('[data-qa="company"]') }
    get addressInput() { return cy.get('[data-qa="address"]') }
    get countrySelect() { return cy.get('[data-qa="country"]') }
    get stateInput() { return cy.get('[data-qa="state"]') }
    get cityInput() { return cy.get('[data-qa="city"]') }
    get zipcodeInput() { return cy.get('[data-qa="zipcode"]') }
    get mobileNumberInput() { return cy.get('[data-qa="mobile_number"]') }
    get createAccountButton() { return cy.get('[data-qa="create-account"]') }

    login(email, password) {
        this.loginEmailInput.should('be.visible').type(email)
        this.loginPasswordInput.should('be.visible').type(password)
        this.loginButton.should('be.visible').click()
    }

    newUserSignup(name, email) {
        this.signupNameInput.should('be.visible').type(name)
        this.signupEmailInput.should('be.visible').type(email)
        this.signupButton.should('be.visible').click()
    }

    createNewUser(userData) {
        const {
            title, password, birthDay, birthMonth, birthYear, firstName, lastName, 
            company, address, country, state, city, zipcode, mobileNumber
        } = userData

        this.titleRadioButton.check(title)
        this.signinPasswordInput.type(password)                
        this.birthDay.select(birthDay)
        this.birthMonth.select(birthMonth)
        this.birthYear.select(birthYear)
        this.firstNameInput.type(firstName)
        this.lastNameInput.type(lastName)
        this.companyInput.type(company)
        this.addressInput.type(address)
        this.countrySelect.select(country)
        this.stateInput.type(state)
        this.cityInput.type(city)
        this.zipcodeInput.type(zipcode)
        this.mobileNumberInput.type(mobileNumber)

        this.createAccountButton.click()
    }
}

export default new AuthPage()
