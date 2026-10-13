const pageElements = require('../../Pages/PageLocators/ITMPageLocators.json')

export class ITMPageActions {

        NavigateToPage(){
        cy.visit('kl-publications/inspector-training-manual')
    }

        VerifyPage(){
        cy.get(pageElements.locators.titleH1TEXT).should('contain','Inspector Training Manual')
    }
}