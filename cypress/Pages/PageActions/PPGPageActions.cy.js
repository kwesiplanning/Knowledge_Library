const pageElements = require('../../Pages/PageLocators/PPGPageLocators.json')

export class PPGPageActions{

    NavigateToPage() {     
        cy.visit('kl-publications/planning-practice-guidance')
    } 

    VerifyPage(){
        cy.get(pageElements.locators.titleH1TEXT)
        .should('contain','Planning Practice Guidance')
    }

}