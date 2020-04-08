describe('Select listing to stay' , () => {

var clickLocationField = ':nth-child(2) > ._slilk2 > form > ._xp659v > :nth-child(1) > ._bujmdv > [dir="ltr"] > label > ._1u1fi4p > #Koan-magic-carpet-koan-search-bar__input'
var selectLocationFromSuggestion = '#Koan-magic-carpet-koan-search-bar__option-1'

       it('Enter Location' , () => {

            cy.get(clickLocationField)
            .type('Kuala Lumpur')
            cy.get(selectLocationFromSuggestion).focus().click()

 });

         it('Select  Date' , () => {

             cy.get('#Koan-magic-carpet-koan-search-bar__option-1').focus().debug()//.click()
             cy.get('[data-testid=" May 29, 2020"]')

  });
})

//set env variables
//activating code completion