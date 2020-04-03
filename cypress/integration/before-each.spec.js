describe('Open Airbnb page' , () => {

var homepageText = '._ubzwse > ._14i3z6h'
    it('Launch airbnb and validate homepage heading' , () => {


       cy.visit('/')
        cy.get(homepageText)
        .invoke('text')
        .should('equal', 'Book unique places to stay and things to do.')

    })
    });