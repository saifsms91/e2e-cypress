describe('' , () => {
    it('' , () => {

        cy.visit('https://www.airbnb.com/')
        cy.get('._ubzwse > ._14i3z6h')
        .invoke('text')
        .should('equal', 'Book unique places to stay and things to do.')
    });

       it('' , () => {

            cy.get(':nth-child(2) > ._slilk2 > form > ._xp659v > :nth-child(1) > ._bujmdv > [dir="ltr"] > label > ._1u1fi4p > #Koan-magic-carpet-koan-search-bar__input')
            .type('Kuala Lumpur')
            cy.get('#Koan-magic-carpet-koan-search-bar__option-1').focus().click()
   cy.get('._1lds9wb > ._1svux14 > ._p5jgym > tbody > :nth-child(5) > ._16zigr23').click()

cy.get('[aria-label="Choose Wednesday, April 29, 2020 as your end date. "]').focus().click()

 });
});