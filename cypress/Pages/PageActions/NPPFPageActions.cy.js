const pageElements = require('../../Pages/PageLocators/NPPFPageLocators.json')

export class NPPFPageActions{

    NavigateToPage() {      
        cy.visit('library/knowledge-library-england-admin/3-government-publications-and-policy/5-planning-policy-29')
    } 

    VerifyPage(){
        cy.get(pageElements.locators.titleH1TEXT)
        .should('contain','National Planning Policy Framework Documents')
    }

}