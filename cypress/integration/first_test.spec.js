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
   //cy.xpath('//div//div//div//div//div//div//div//div//div//div//div//div//div//div//div//div//div//div//div//div//div//div//div[2]//div[1]//table[1]//tbody[1]//tr[5]//td[5]').last().click({force: true} )

cy.get('[data-testid=" May 29, 2020"]')


 });
})