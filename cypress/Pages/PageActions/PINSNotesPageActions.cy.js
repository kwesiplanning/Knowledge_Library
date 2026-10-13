const pageElements = require('../PageLocators/PINSNotesPageLocators.json')

export class PINSNotesPageActions{
       
    NavigateToPage() {       
        cy.visit('kl-publications/pins-notes')
    } 

    VerifyPage(){
        cy.get(pageElements.locators.titleH1TEXT)
        .should('contain','PINS Notes')
    }
}