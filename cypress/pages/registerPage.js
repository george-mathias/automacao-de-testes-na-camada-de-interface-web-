class RegisterPage {

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

export default new RegisterPage()
