describe('/products', () => {

    const product = {
        name: 'Blue Top',
        category: 'Category: Women > Tops',
        price: 'Rs. 500',
        availability: 'Availability: In Stock',
        condition: 'Condition: New',
        brand: 'Brand: Polo'
    }

    before(function () {

        cy.visit('/')
        cy.contains('Full-Fledged practice website for Automation Engineers')

        cy.get('a[href="/products"]').click()
        // cy.contains('All Products')

        cy.get('.features_items')
            .should('be.visible')
    })

    it('Search Product', function () {

        // act
        cy.get('input[id="search_product"]')
            .should('be.visible')
            .type(product.name)

        cy.get('button[id="submit_search"]')
            .should('be.visible')
            .click()

        // assert
        cy.get('.productinfo.text-center')
            .contains(product.name)
            .parents('.productinfo.text-center')
            .within(() => {
                cy.get('h2').should('have.text', product.price)
                cy.get('p').should('have.text', product.name)
            })
    })
}) // test ok!