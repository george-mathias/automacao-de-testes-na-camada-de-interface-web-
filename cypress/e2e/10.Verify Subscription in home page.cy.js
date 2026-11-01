describe('/products', () => {

    before(function () {

        cy.visit('/')
        cy.contains('Full-Fledged practice website for Automation Engineers')

        cy.get('.single-widget h2')
            .should('be.visible')
            .and('have.text', 'Subscription')
    })

    it('Verify subscription in home page', function () {

        // act        
        cy.get('#susbscribe_email')
            .scrollIntoView()
            .should('be.visible')
            .type('xulio@xuliooflime.com')

        cy.get('#subscribe')
            .click()

        // assert
        cy.contains('You have been successfully subscribed!')
            .should('be.visible')
    })
}) // test ok!