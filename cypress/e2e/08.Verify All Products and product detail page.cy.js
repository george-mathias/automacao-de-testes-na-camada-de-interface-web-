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

    it('register a new user', function () {

        // act
        cy.get('a[href="/product_details/1"]').click()
        cy.get('.product-information h2')
            .should('be.visible')
            .and('have.text', product.name)

        cy.get('.product-information p')
            .should('be.visible')
            .contains('Brand: Polo')


        // assert
        cy.get('.product-information').within(() => {
            cy.get('h2').should('have.text', product.name)
            cy.get('p:nth-of-type(1)').should('contain.text', product.category)
            cy.get('span span').should('contain.text', product.price)
            cy.get('p').should('contain.text', product.availability)
            cy.get('p').should('contain.text', product.condition)
            cy.get('p').should('be.visible').contains(product.brand)
        })
    })
}) // test ok!