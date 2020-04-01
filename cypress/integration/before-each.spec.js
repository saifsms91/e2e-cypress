describe('' , () => {
    it('' , () => {

        cy.visit('https://www.airbnb.com/')
        cy.get('._ubzwse > ._14i3z6h')
        .invoke('text')
        .should('equal', 'Book unique places to stay and things to do.')

    })
    });